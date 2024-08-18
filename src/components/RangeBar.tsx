import { Slider } from "@mui/material";
import React from "react";
import useColorScheme from "../hooks/useColorScheme";

interface Props {
  min?: number;
  value: number[];
  setValue: (newValue: number[]) => void;
}

const RangeBar: React.FC<Props> = ({ value, setValue }) => {
  const { colorscheme } = useColorScheme();
  const handleChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      min={0}
      max={1000}
      disableSwap
      sx={{
        color: colorscheme.text,
      }}
    />
  );
};

export default RangeBar;
