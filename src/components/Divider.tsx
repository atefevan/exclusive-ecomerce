import { Box } from "@mui/material";

interface Props {
  width?: string | number;
  height?: string | number;
  color?: string;
  margin?: string | number;
  orientation?: "horizontal" | "vertical";
}

const Divider = ({
  width = "100%",
  height = "2px",
  color = "#202020",
  margin = "16px 0",
  orientation = "horizontal",
}: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: orientation === "horizontal" ? width : height,
        height: orientation === "horizontal" ? height : width,
        margin: orientation === "horizontal" ? `${margin} 0` : `0 ${margin}`,
      }}
    />
  );
};

export default Divider;
