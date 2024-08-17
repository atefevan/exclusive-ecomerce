import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SxProps, Theme } from "@mui/material";
import useColorScheme from "../hooks/useColorScheme";
import { SettingsContext } from "../context/Settings";

interface Props {
  size?: "small" | "medium" | "large";
  style?: SxProps<Theme>;
  height?: string | number;
  leftIcon: React.ReactElement<any, any>;
  rightIcon: React.ReactElement<any, any>;
  selected?: string | "left" | "right";
  setSelected: (value: "left" | "right") => void;
}

const ToggleBtn = ({
  size,
  height = "3.5vh",
  leftIcon,
  rightIcon,
  style,
  selected = "left",
  setSelected,
}: Props) => {
  const { colorscheme } = useColorScheme();
  const { darkMode } = React.useContext(SettingsContext);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: "left" | "right" | null
  ) => {
    if (newAlignment === "left" || newAlignment === "right") {
      setSelected(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      size={size}
      sx={{ height, ...style }}
    >
      <ToggleButton
        value="left"
        sx={{
          "&.Mui-selected": {
            backgroundColor: colorscheme.gray800,
            color: colorscheme.white,
            "&:hover": {
              backgroundColor: colorscheme.gray800,
            },
          },
        }}
      >
        {rightIcon}
      </ToggleButton>
      <ToggleButton
        value="right"
        sx={{
          "&.Mui-selected": {
            backgroundColor: colorscheme.gray800,
            color: colorscheme.white,
            "&:hover": {
              backgroundColor: colorscheme.gray800,
            },
          },
        }}
      >
        {leftIcon}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleBtn;
