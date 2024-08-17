import { Box } from "@mui/material";
import * as React from "react";
import Background from "../components/Background";
import { png } from "../assets";
import Footer from "../components/Footer";
import { SettingsContext } from "../context/Settings";

const NoPage = () => {
  const { darkMode } = React.useContext(SettingsContext);
  return (
    <Background>
      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
            overflow: "clip",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "clip",
              flex: 1,
            }}
          >
            <Box
              component={"img"}
              src={
                darkMode === "dark" ? png.not_found_light : png.not_found_dark
              }
              sx={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                backgroundSize: "cover",
              }}
            />
          </Box>
        </Box>
        <Footer />
      </Box>
    </Background>
  );
};

export default NoPage;
