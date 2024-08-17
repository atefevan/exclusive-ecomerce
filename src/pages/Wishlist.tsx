import { Box } from "@mui/material";
import * as React from "react";
import Background from "../components/Background";
import { fontSizes } from "../constant/sizes";
import Footer from "../components/Footer";
import Text from "../components/Text";
const Wishlist = () => {
  return (
    <Background>
      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text fontSize={fontSizes.xxl} fontWeight={"bold"}>
            WISHLIST
          </Text>
        </Box>
        <Footer />
      </Box>
    </Background>
  );
};

export default Wishlist;
