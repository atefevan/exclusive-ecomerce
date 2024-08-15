import { SxProps, Theme, Typography } from "@mui/material";
import { fonts } from "../constant/font";
import { fontSizes } from "../constant/sizes";
import useColorScheme from "../hooks/useColorScheme";
import React from "react";

interface Props {
  children: React.ReactNode;
  component?: any;
  opacity?: number;
  custom_color?: string;
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  fontFamily?: string;
  fontWeight?: string | number;
  fontSize?: string | number;
  align?: "inherit" | "left" | "center" | "right" | "justify";
  lineHeight?: string | number;
  bg_color?: string;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  paddingAll?: string | number;
  alignSelf?: string;
  onClick?: () => void;
  style?: SxProps<Theme>;
}

const Text = ({
  children,
  component,
  variant = "subtitle1",
  fontFamily = fonts.default,
  fontWeight,
  opacity,
  fontSize = fontSizes.sm,
  custom_color = useColorScheme().colorscheme.text,
  align,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  paddingAll,
  lineHeight,
  bg_color,
  alignSelf,
  onClick,
  style,
}: Props) => {
  return (
    <Typography
      variant={variant}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={custom_color}
      align={align}
      textOverflow={"ellipsis"}
      bgcolor={bg_color}
      alignSelf={alignSelf}
      component={component}
      onClick={onClick}
      sx={{
        mt: marginTop,
        mb: marginBottom,
        ml: marginLeft,
        mr: marginRight,
        p: paddingAll,
        opacity: opacity,
        ...style,
      }}
    >
      {children}
    </Typography>
  );
};

export default Text;
