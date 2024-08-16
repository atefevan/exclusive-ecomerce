import { Skeleton, SxProps, Theme } from "@mui/material";
import * as React from "react";
interface Props {
  color?: string;
  type?: "rectangular" | "circular" | "rounded" | "text";
  height?: number | string;
  animation?: "wave";
  width?: number | string;
  style?: SxProps<Theme>;
}
const Loader = ({
  color = "#2a2c2f",
  width = "100%",
  height = "100%",
  type = "rectangular",
  animation = "wave",
  style,
}: Props) => {
  return (
    <Skeleton
      animation={animation}
      variant={type}
      width={width}
      height={height}
      sx={{ ...style }}
    />
  );
};

export default Loader;
