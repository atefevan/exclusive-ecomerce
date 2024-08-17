import { Box, Pagination, SxProps, Theme } from "@mui/material";
import React from "react";
import useColorScheme from "../hooks/useColorScheme";
import { SettingsContext } from "../context/Settings";

interface Props {
  size: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  style?: SxProps<Theme>;
}

const Pager = ({ size, page, onChange, style }: Props) => {
  const { colorscheme } = useColorScheme();
  const { darkMode } = React.useContext(SettingsContext);

  return (
    <Box sx={{ ...style }}>
      <Pagination
        count={size}
        page={page}
        onChange={onChange}
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: colorscheme.transparent,
            color: colorscheme.text,
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor:
              darkMode === "dark" ? colorscheme.gray800 : colorscheme.gray500,
          },
          "& .Mui-selected": {
            backgroundColor:
              darkMode === "dark" ? colorscheme.teal : colorscheme.lavender,
            color: colorscheme.white,
            "&:hover": {
              backgroundColor:
                darkMode === "dark"
                  ? colorscheme.teal
                  : colorscheme.lavender, // Keeps the color on hover
            },
          },
          "& .MuiPaginationItem-ellipsis": {
            color: colorscheme.text,
          },
          "& .MuiPaginationItem-icon": {
            color: colorscheme.text,
          },
        }}
      />
    </Box>
  );
};

export default Pager;
