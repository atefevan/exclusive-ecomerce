import { Button, SxProps, Theme } from "@mui/material";
import { fontSizes } from "../constant/sizes";
import { fonts } from "../constant/font";
import useColorScheme from "../hooks/useColorScheme";
import Text from "./Text";
interface BtnProps {
  id?: string;
  label: any;
  bgColor?: string;
  fontColor?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  cornerRadius?: number;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  width?: string | number;
  height?: string;
  variant: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  marginLeft?: number | string;
  marginRight?: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isDisabled?: boolean;
  ref?: any;
  isHidden?: boolean;
  textTransform?: any;
  style?: SxProps<Theme>;
  borderColor?: string;
  onClick?: (value: any) => void;
  onSubmit?: () => void;
}

const C_Button = ({
  id,
  label,
  fontSize = fontSizes.xs,
  fontWeight = 500,
  fontFamily = fonts?.default,
  variant = "contained",
  size = "medium",
  bgColor,
  width = "15%",
  height,
  color,
  cornerRadius,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  isDisabled = false,
  style,
  ref,
  fontColor = useColorScheme().colorscheme.text,
  startIcon,
  endIcon,
  onClick,
  isHidden = false,
  textTransform = "none",
  onSubmit,
  borderColor,
}: BtnProps) => {
  return (
    <>
      <Button
        id={id}
        disabled={isDisabled}
        ref={ref}
        hidden={isHidden}
        sx={{
          width: width,
          height: height,
          bgcolor: bgColor,
          borderRadius: cornerRadius,
          ml: marginLeft,
          mr: marginRight,
          mt: marginTop,
          mb: marginBottom,
          textTransform: textTransform,
          "&:hover": { bgcolor: bgColor },
          "&.MuiButton-outlined": {
            borderColor: borderColor,
            borderWidth: 1,
          },
          ...style,
        }}
        variant={variant}
        size={size}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        onSubmit={onSubmit}
        color={color}
      >
        <Text
          variant="subtitle1"
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          custom_color={fontColor}
        >
          {label}
        </Text>
      </Button>
    </>
  );
};

export default C_Button;
