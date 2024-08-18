import { Box } from "@mui/material";
import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import Text from "./Text";
import { offer_txt } from "../mock/data";
import { SettingsContext } from "../context/Settings";
import { fontSizes } from "../constant/sizes";
import Btn from "./Btn";

const Header = () => {
  const { colorscheme } = useColorScheme();
  const { darkMode } = React.useContext(SettingsContext);
  return (
    <Box
      sx={{
        display: "flex",
        height: "7%",
        backgroundColor: colorscheme.text,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        custom_color={
          darkMode === "dark" ? colorscheme.black : colorscheme.white
        }
        fontSize={fontSizes.md}
      >
        {offer_txt}
      </Text>
      <Btn
        variant="outlined"
        fontSize={fontSizes.sm}
        size="small"
        style={{ marginInline: "2vw", width: "90px" }}
        label={"Shop Now"}
        fontColor={darkMode === "dark" ? colorscheme.black : colorscheme.white}
        borderColor={
          darkMode === "dark" ? colorscheme.black : colorscheme.white
        }
        onClick={() => (window.location.href = `/product`)}
      />
    </Box>
  );
};

export default Header;
