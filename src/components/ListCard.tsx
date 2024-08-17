import { Box, Rating, SxProps, Theme, Tooltip } from "@mui/material";
import Text from "./Text";
import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import { fontSizes } from "../constant/sizes";
import Btn from "./Btn";
import { SettingsContext } from "../context/Settings";
import { Favorite } from "@mui/icons-material";
import Divider from "./Divider";
import { png } from "../assets";

interface Props {
  product?: any;
  hasDiscount?: boolean;
  discount?: string | number;
  hasFavourite?: boolean;
  handleFavourite?: (value: any) => void;
  style?: SxProps<Theme>;
}

const ListCard = ({ product, hasFavourite, handleFavourite, style }: Props) => {
  const { colorscheme } = useColorScheme();
  const { darkMode } = React.useContext(SettingsContext);

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "8px",
        backgroundColor:
          darkMode === "dark" ? "#2F303C" : colorscheme.gray100,
        height: "22vh",
        overflow: "hidden",
        m: 1,
        ...style,
      }}
    >
      {/* Left Section: Image and Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "75%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={product?.image}
          alt="product"
          sx={{
            marginInline: "10px",
            width: { xs: "100px", md: "200px" },
            height: "100%",
            objectFit: "contain",
            borderRadius: "5%",
          }}
        />
        <Box
          sx={{ flex: 1, display: "flex", flexDirection: "column", px: "1vw" }}
        >
          <Text
            fontSize={fontSizes.md}
            fontWeight={600}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product?.title}
          </Text>
          <Box display="flex" alignItems="center" mt={1}>
            <Rating
              name="product-rating"
              value={product?.rating.rate}
              readOnly
            />
            <Text fontSize={fontSizes.md} marginLeft={1}>
              ({product?.rating?.count})
            </Text>
          </Box>
          <Text
            // fontSize={fontSizes.sm}
            style={{
              fontSize: { xs: fontSizes.xs, md: fontSizes.sm },
              mt: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: { xs: "none", md: "-webkit-box" },
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product?.description}
          </Text>
        </Box>
      </Box>

      {/* Divider */}
      <Divider
        orientation="vertical"
        style={{ height: "90%", alignSelf: "center" }}
      />

      {/* Right Section: Price, Shipping, Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: { xs: "40%", md: "25%" },
          p: 2,
        }}
      >
        <Box sx={{ display: "flex",flex:1,justifyContent:"space-between" }}>
          <Text fontSize={fontSizes.xl} fontWeight="bold">
            $ {product?.price}
          </Text>
          <Tooltip title="Stock Available" arrow>
          <Box
            component="img"
            src={png.in_stock}
            alt="Free Shipping"
            height="25px"
          /></Tooltip>
        </Box>
        <Box display="flex" alignItems="center">
          <Text
            fontSize={fontSizes.sm}
            style={{ mr: 1 }}
          >
            Shipping
          </Text>
          <Box
            component="img"
            src={png.free}
            alt="Free Shipping"
            height="30px"
          />
        </Box>
        <Btn
          variant="outlined"
          label="Details"
          width="100%"
          borderColor={colorscheme.white}
          fontColor={colorscheme.black}
          bgColor={colorscheme.white}
        />
        {hasFavourite && (
          <Btn
            variant="outlined"
            label="Wishlist"
            width="100%"
            marginTop={2}
            borderColor={colorscheme.white}
            fontColor={colorscheme.black}
            bgColor={colorscheme.white}
            startIcon={<Favorite sx={{ color: colorscheme.black }} />}
            onClick={handleFavourite}
          />
        )}
      </Box>
    </Box>
  );
};

export default ListCard;
