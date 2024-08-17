import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
  Theme,
} from "@mui/material";
import useColorScheme from "../hooks/useColorScheme";
interface Props {
  label?: string;
  menuHeight?: string | number;
  menuWidth?: string | number;
  key?: string;
  style?: SxProps<Theme>;
  id?: string;
  items?: any[];
  defaultValue?: any;
  isRequired?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  errorHelperText?: string;
  size?: "small" | "medium";
  variant?: "filled" | "standard" | "outlined";
  onClick?: () => void;
  onChange?: (e: any) => void;
  value?: string;
  labelFontSize?: number | string;
  placeHolder?: string;
  name?: string;
  outlineColor?: string;
  onFocus?: (value?: any) => void;
}

const Dropdown = ({
  onFocus,
  label,
  key,
  items,
  id,
  defaultValue,
  isError,
  isRequired,
  style,
  variant,
  errorHelperText,
  isDisabled,
  placeHolder,
  onClick,
  value,
  name,
  onChange,
  size,
  labelFontSize = 20,
  menuHeight = 300,
  menuWidth = 100,
  outlineColor = useColorScheme().colorscheme.text,
}: Props) => {
  const { colorscheme } = useColorScheme();
  return (
    <div id={id} style={{ width: "100%" }}>
      <FormControl
        fullWidth
        error={isError}
        size={size}
        required={isRequired}
        variant={variant}
        disabled={isDisabled}
        sx={{
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderColor: "blue",
          },
        }}
      >
        <InputLabel
          id={id}
          sx={{
            color: outlineColor,
            fontSize: labelFontSize,
            "&.Mui-focused": {
              color: outlineColor,
            },
            ...style,
            zIndex: 0,
          }}
        >
          {label}
        </InputLabel>
        <Select
          key={key}
          labelId={id}
          id={id}
          value={value}
          name={name}
          color="secondary"
          MenuProps={{
            style: {
              maxHeight: menuHeight,
              maxWidth: menuWidth,
            },
          }}
          label={label}
          placeholder={placeHolder}
          defaultValue={defaultValue}
          autoWidth={false}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
          sx={{
            color: outlineColor,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: outlineColor,
              fontSize: labelFontSize,
            },
            "& .MuiSvgIcon-root": {
              color: outlineColor,
            },
            "&:hover": {
              "&& fieldset": {
                border: `2px solid ${outlineColor}`,
              },
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: outlineColor,
            },
            "& .MuiInputLabel-outlined .MuiOutlinedInput-notchedOutline": {
              color: outlineColor,
            },
            ...style,
          }}
        >
          {items?.map((e) => (
            <MenuItem value={e}>{e}</MenuItem>
          ))}
        </Select>
        {isError ? <FormHelperText>{errorHelperText}</FormHelperText> : null}
      </FormControl>
    </div>
  );
};

export default Dropdown;
