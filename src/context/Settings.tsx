import * as React from "react";
interface Type {
  darkMode: string;
  toggleMode: () => void;
}

const SettingsContext = React.createContext<Type>({
  darkMode: "light",
  toggleMode: () => {},
});

const SettingsProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = React.useState<string>(
    localStorage.getItem("theme")!
  );
  const toggleMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
    localStorage.setItem("theme", darkMode === "dark" ? "light" : "dark");
  };
  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        toggleMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
