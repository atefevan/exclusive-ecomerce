import { Box, SxProps, Theme } from "@mui/material";
import useColorScheme from "../hooks/useColorScheme";
import * as React from "react";
import { colors } from "../constant/colors";
import Header from "./Header";
import Nav from "./Nav";

interface Props {
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  bgColor?: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  display?: string;
  padding?: number;
  children?: React.JSX.Element[] | React.ReactNode;
  styles?: SxProps<Theme>;
}
const Background = ({
  padding,
  position,
  bgColor,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  display,
  children,
  styles,
}: Props) => {
  const { colorscheme } = useColorScheme();
  // const themeState = localStorage.getItem("theme");
  return (
    <Box
      sx={{
        zIndex: -1,
        bgcolor: colorscheme.backgroundColor,
        position: position ? position : "fixed",
        left: left,
        right: right,
        top: top,
        bottom: bottom,
        display: display ? display : "flex",
        flexDirection: "column",
        p: padding ? padding : 0,
        m: 0,
        ...styles,
      }}
    >
      <Header />
      <Nav />
      {children}
    </Box>
  );
};

export default Background;
