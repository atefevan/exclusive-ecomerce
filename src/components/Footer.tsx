import { Box } from "@mui/material";
import * as React from "react";
import useColorScheme from "../hooks/useColorScheme";
import Text from "./Text";
import InputField from "./InputField";
import { Send } from "@mui/icons-material";
import { fontSizes } from "../constant/sizes";
const Footer = () => {
  const { colorscheme } = useColorScheme();
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: colorscheme.black,
        minHeight: {xs:"35%",md:"30%"},
        justifyContent: "space-around",
        padding: "1vw",
        overflow:"clip"
      }}
    >
      {/* Company Name */}
      <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"start",pt:"1vh" }}>

        <Text custom_color={colorscheme.white} fontSize={fontSizes.xl} style={{
          py:"5px",
          background: "-webkit-linear-gradient(#219C90,#06D001)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 700, // Optional, for bold text
        }}>Exclusive</Text>

        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"10px",cursor:"pointer"}}>Subscribe</Text>
        <Box sx={{ display: "flex", flexDirection: "column",py:"5px" }}>
          <Text custom_color={colorscheme.white} style={{py:"2px"}}>Get 10% off your first order</Text>
          <InputField suffixIcon={<Send sx={{color:colorscheme.white}}/>} size="small" fontColor={colorscheme.white} placeHolder="Email"/>
        </Box>
      </Box>
      {/* Support */}
      <Box sx={{ display: {xs:"none",md:"flex"}, flexDirection: "column",justifyContent:"start",pt:"1vh" }}>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.xl} style={{py:"5px"}}>Support</Text>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"10px",cursor:"pointer"}}>111 Bijay Road,Dhaka,DH 1511, Bangladesh</Text>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"10px",cursor:"pointer"}}>exclusive@gmail.com</Text>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"10px",cursor:"pointer"}}>+880 1521168024</Text>
      </Box>
      {/* Account */}
      <Box sx={{ display: {xs:"none",md:"flex"}, flexDirection: "column",justifyContent:"start",pt:"1vh" }}>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.xl} style={{py:"5px"}}>Account</Text>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"10px",cursor:"pointer"}}>My Account</Text>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"5px",cursor:"pointer"}}>Login / Register</Text>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"5px",cursor:"pointer"}}>Cart</Text>
      </Box>
      {/* Quick Link */}
      <Box sx={{ display: {xs:"none",md:"flex"}, flexDirection: "column",justifyContent:"start",pt:"1vh" }}>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.xl} style={{py:"5px"}}>Quick Links</Text>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"10px",cursor:"pointer"}}>Privacy Policy</Text>
        <Text custom_color={colorscheme.white} fontSize={fontSizes.md} style={{py:"10px",cursor:"pointer"}}>Terms of Use</Text>
      </Box>
    </Box>
  );
};

export default Footer;
