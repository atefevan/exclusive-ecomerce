import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import useColorScheme from "../hooks/useColorScheme";
interface Props {
  id?: string;
  options?: any;
  focuseColor?: string;
  focuseColorUnderline?: string;
  fontColor?: string;
  focuseBorderColor?: string;
  fontSize?: number | string;
  label?: string;
  outlineColor?: string;
  setValue?: (value?: any) => void;
  value?: any;
  style?: any;
  isDisabled?: boolean;
  size?: "small" | "medium";
  placeHolder?: string;
}
const SpeedSelect = ({
  id,
  options,
  focuseColor = useColorScheme().colorscheme.text,
  focuseColorUnderline = useColorScheme().colorscheme.text,
  fontColor = useColorScheme().colorscheme.text,
  fontSize,
  outlineColor = useColorScheme().colorscheme.text,
  focuseBorderColor = useColorScheme().colorscheme.text,
  label = "demo",
  value,
  size,
  setValue = () => {},
  style,
  placeHolder,
  isDisabled,
}: Props) => {
  const [inputValue, setInputValue] = React.useState("");
  const items = options?.map((item: any) => item.title);
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={items}
      disabled={isDisabled}
      value={value}
      onChange={(_, newValue: string | null) => {
        newValue ? setValue(newValue) : setValue("");
      }}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      sx={{
        width: "100%",
        height: "30%",
        "& label.Mui-focused": {
          color: focuseColor,
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: focuseColorUnderline,
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: focuseBorderColor,
          },
          "&:hover fieldset": {
            borderColor: focuseBorderColor,
          },
          "&.Mui-focused fieldset": {
            borderColor: focuseBorderColor,
            color: "white",
          },
        },
        ".MuiInputLabel-root": {
          color: focuseColor,
        },
        zIndex: 0,
        color: outlineColor,
        "& .MuiSvgIcon-root": {
          color: outlineColor,
        },
        "& .Mui-focused.MuiAutocomplete-input": {
          color: outlineColor,
        },
        "&.MuiAutocomplete-inputRoot": {
          color: outlineColor,
        },
        ...style,
      }}
      ListboxProps={{ style: { maxHeight: 150 } }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          size={size}
          placeholder={placeHolder}
          InputProps={{
            ...params.InputProps,
            style: { color: fontColor, fontSize: fontSize },
          }}
        />
      )}
    />
  );
};

export default SpeedSelect;
