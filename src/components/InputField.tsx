import { Visibility, VisibilityOff } from "@mui/icons-material";
import Text from "./Text";
import {
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { useState } from "react";
import { fonts } from "../constant/font";
import useColorScheme from "../hooks/useColorScheme";
import { fontSizes } from "../constant/sizes";

interface Props {
  prefixIcon?: any;
  name?: string;
  prefixText?: string;
  icon_color?: string;
  isReadOnly?: boolean;
  suffixIcon?: React.ReactNode;
  suffixText?: string;
  label?: string;
  fontSize?: string | number;
  id?: string;
  placeHolder?: string;
  type?: string;
  required?: boolean;
  helperText?: string;
  _disabled?: boolean;
  isError?: boolean;
  fullwidth?: boolean;
  value?: string | number;
  variant?: "standard" | "outlined" | "filled";
  style?: SxProps<Theme>;
  font?: string;
  borderColor?:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning";
  hiddenLabel?: boolean;
  focused?: boolean;
  size?: "small" | "medium";
  focuseColor?: string;
  focuseColorUnderline?: string;
  focuseBorderColor?: string;
  fontColor?: string;
  defaultValue?: string | number;
  maxLength?: number;
  isMultiline?: boolean;
  textRows?: number;
  autoFocus?: boolean;
  labelFontSize?: number | string;
  fieldOnChange?: (value: any) => void;
  onBlur?: (value?: any) => void;
  onSubmit?: (value?: any) => void;
  validator?: any;
  handleSuffixAction?: (value?: any) => void;
  handlePreffixAction?: (value?: any) => void;
  hasPreffixAction?: boolean;
  hasSuffixAction?: boolean;
  onFocus?: (value?: any) => void;
}

const InputField = ({
  label,
  id,
  name,
  variant,
  fontSize,
  required = false,
  isMultiline = false,
  textRows = 4,
  maxLength,
  isError,
  _disabled,
  type = "text",
  helperText,
  prefixIcon,
  prefixText,
  value,
  suffixText,
  suffixIcon,
  placeHolder,
  style,
  focused,
  borderColor,
  font = fonts.default,
  fieldOnChange,
  fullwidth,
  hiddenLabel,
  defaultValue,
  focuseColor = useColorScheme().colorscheme.text,
  focuseColorUnderline = useColorScheme().colorscheme.text,
  fontColor = useColorScheme().colorscheme.text,
  focuseBorderColor = useColorScheme().colorscheme.text,
  size,
  validator,
  autoFocus = false,
  isReadOnly,
  labelFontSize = 20,
  onBlur,
  onFocus,
  onSubmit,
  handleSuffixAction,
  handlePreffixAction,
  hasPreffixAction = false,
  hasSuffixAction = false,
}: Props) => {
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { colorscheme } = useColorScheme();
  return (
    <>
      <div id={id} style={{ width: "100%" }}>
        <TextField
          // fullWidth={fullwidth}
          autoComplete="off"
          hiddenLabel={hiddenLabel}
          focused={focused}
          multiline={isMultiline}
          size={size}
          onFocus={onFocus}
          defaultValue={defaultValue}
          name={name}
          rows={textRows}
          inputProps={{ maxLength: maxLength }}
          sx={{
            width: "100%",
            "& label.Mui-focused": {
              color: focuseColor,
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: focuseColorUnderline,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: focuseBorderColor,
                fontSize: labelFontSize,
              },
              "&:hover fieldset": {
                borderColor: focuseBorderColor,
              },
              "&.Mui-focused fieldset": {
                borderColor: focuseBorderColor,
              },
            },
            ".MuiInputLabel-root": {
              color: focuseColor,
            },
            ...style,
            zIndex: 0,
          }}
          InputLabelProps={{
            sx: {
              fontSize: labelFontSize,
              "&.MuiOutlinedInput-notchedOutline": { fontSize: labelFontSize },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: colorscheme.text }}>
                {prefixText ? prefixText : prefixIcon ? prefixIcon : null}
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  color: colorscheme.text,
                  cursor: "pointer",
                }}
              >
                <IconButton
                  onClick={
                    hasSuffixAction ? handleSuffixAction : handleShowPassword
                  }
                  edge="end"
                  sx={{ color: colorscheme.text }}
                >
                  {suffixText ? suffixText : suffixIcon ? suffixIcon : null}
                  {type === "password" ? (
                    showPassword ? (
                      <VisibilityOff sx={{ color: fontColor }} />
                    ) : (
                      <Visibility sx={{ color: fontColor }} />
                    )
                  ) : null}
                </IconButton>
              </InputAdornment>
            ),
            style: {
              fontFamily: font,
              color: fontColor,
            },
            readOnly: isReadOnly,
          }}
          id={id}
          label={label}
          value={value}
          type={showPassword ? type : "text"}
          placeholder={placeHolder}
          disabled={_disabled}
          error={validator?.condition}
          color={borderColor}
          variant={variant}
          required={required ? required : false}
          onChange={fieldOnChange}
          onBlur={onBlur}
          autoFocus={autoFocus}
          onSubmit={onSubmit}
          helperText={
            <Text
              variant="subtitle1"
              fontSize={fontSizes.xs}
              custom_color={colorscheme.red500}
            >
              {validator?.message}
            </Text>
          }
        />
      </div>
    </>
  );
};

export default InputField;
