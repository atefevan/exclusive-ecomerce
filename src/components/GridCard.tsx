import { Box, Rating, SxProps, Theme } from "@mui/material";
import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import Text from "./Text";
import { fontSizes } from "../constant/sizes";
import { randRating } from "../utils/Parser";
import { SettingsContext } from "../context/Settings";
import { FavoriteBorder, Visibility } from "@mui/icons-material";
import IconButton from "./IconButton";
import IconBtn from "./IconButton";

interface Props {
  img?: string;
  title?: string;
  price?: string | number;
  rating?: number;
  rateCount?: number;
  hasDiscount?: boolean;
  discount?: string | number;
  hasFavourite?: boolean;
  handleFavourite?: (value: any) => void;
  style?: SxProps<Theme>;
}

const Card = ({
  img,
  title,
  price,
  rating,
  rateCount,
  discount,
  hasDiscount,
  hasFavourite,
  handleFavourite,
  style,
}: Props) => {
  const { colorscheme } = useColorScheme();
  const { darkMode } = React.useContext<any>(SettingsContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "230px",
        // border: `1px solid ${colorscheme.text}`,
        overflow: "clip",
        borderRadius: "5%",
        alignItems: "start",
        justifyContent: "space-between",
        margin: 0.5,
        ...style,
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "190px",
          width: "100%",
          borderRadius: "5%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
            right: "2px",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "10%",
              bgcolor: colorscheme.btn_bg,
              px: "10px",
              height: "25px",
            }}
          >
            <Text
              fontSize={fontSizes.xs}
              custom_color={
                darkMode === "dark" ? colorscheme.black : colorscheme.white
              }
            >
              {`- ${randRating(30, 80)}%`}
            </Text>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <IconBtn
              muiIcon={<FavoriteBorder />}
              onClick={handleFavourite}
              style={{ marginRight: 1 }}
            />
            <IconBtn
              muiIcon={<Visibility />}
              // onClick={handleFavourite}
              style={{ marginRight: 1, mt: "5px" }}
            />
          </Box>
        </Box>

        {/* Image */}
        <img
          src={img}
          alt="example"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            zIndex: 1,
            backgroundColor: colorscheme.card,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          width: "250px",
          "&:hover .scrollText": {
            animation: "marquee 5s linear infinite",
          },
        }}
      >
        <Box
          className="scrollText"
          sx={{
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          <Text fontSize={fontSizes.md} fontWeight={600} style={{ p: "2%" }}>
            {title}
          </Text>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Text
          fontSize={fontSizes.md}
          fontWeight={600}
          custom_color={colorscheme.red500}
          style={{ pb: "2%", pl: "10px" }}
        >
          {`$ ${price}`}
        </Text>
      </Box>
      <Box display={"flex"} sx={{ pl: "10px" }}>
        <Rating name="product-rating" value={rating} readOnly />
        <Text fontSize={fontSizes.md}>{`\u00A0(${rateCount})`}</Text>
      </Box>
    </Box>
  );
};

export default Card;
