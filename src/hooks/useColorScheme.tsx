import * as React from "react";
import { SettingsContext } from "../context/Settings";
import { colors } from "../constant/colors";

const useColorScheme = () => {
  const { darkMode }: any = React.useContext(SettingsContext);
  const colorscheme = darkMode === "dark" ? colors.dark : colors.light;

  return { colorscheme };
};

export default useColorScheme;
