import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
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
  size?: string | number;
  placeHolder?: string;
}
const SpeedSelect = ({
  id,
  options,
  focuseColor = "white",
  focuseColorUnderline = "white",
  fontColor = "white",
  fontSize,
  outlineColor = "white",
  focuseBorderColor = "white",
  label = "demo",
  value,
  size,
  setValue,
  style,
  placeHolder,
  isDisabled,
}: Props) => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      disabled={isDisabled}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        newValue ? setValue(newValue) : setValue("");
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
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
            // fontSize: labelFontSize,
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
      // getOptionLabel={option => option.name}
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
