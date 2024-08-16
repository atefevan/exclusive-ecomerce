import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Search } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { DarkMode, LightMode, FilterAlt } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import { menuOptions, routes } from "../constant/routes";
import { companyName } from "../mock/data";
import InputField from "./InputField";
import { colors } from "../constant/colors";
import Text from "./Text";
import { fontSizes } from "../constant/sizes";
import useColorScheme from "../hooks/useColorScheme";
import Btn from "./Btn";
import { capitalize } from "../utils/Capitalize";
import IconBtn from "./IconButton";
import { SettingsContext } from "../context/Settings";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  const { colorscheme } = useColorScheme();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const { darkMode, toggleMode } = React.useContext<any>(SettingsContext);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRouteClick = (page: string) => {
    if (page === "signup") {
      window.location.href = `/${"auth".toLowerCase()}`;
      return;
    }
    window.location.href = `/${page.toLowerCase()}`;
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: colors.others.transparent }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box>
            <Text
              noWrap
              component="a"
              style={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                textDecoration: "none",
                cursor: "pointer",
              }}
              fontSize={fontSizes.xl}
              onClick={() => (window.location.href = `/`)}
            >
              {companyName}
            </Text>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ color: colorscheme.text }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {routes.map((route) => (
                  <MenuItem key={route} onClick={() => handleRouteClick(route)}>
                    <Typography textAlign="center">
                      {capitalize(route)}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <Box>
            <Text
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              style={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                textDecoration: "none",
                cursor: "pointer",
              }}
              fontSize={fontSizes.xl}
              onClick={() => (window.location.href = `/`)}
            >
              {companyName}
            </Text>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {routes.map((route) => (
                <Btn
                  key={route}
                  label={capitalize(route)}
                  variant={"text"}
                  fontColor={colorscheme.text}
                  onClick={() => handleRouteClick(route)}
                  fontSize={"12"}
                  style={{ m: 2, minWidth: "80px" }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <IconBtn
              muiIcon={
                darkMode === "dark" ? (
                  <DarkMode style={{ color: colorscheme.black }} />
                ) : (
                  <LightMode style={{ color: colorscheme.black }} />
                )
              }
              onClick={toggleMode}
              style={{ marginRight: 1 }}
            />
            {/* <InputField
              size="small"
              placeHolder="looking for ?"
              suffixIcon={<Search />}
              style={{ display: { xs: "none", md: "flex" } }}
            />
            <Btn
              variant="outlined"
              fontSize={fontSizes.sm}
              size="small"
              style={{
                display: { xs: "none", md: "flex" },
                marginInline: "1vw",
                width: "50%",
              }}
              label={"Filter"}
              height="40px"
              endIcon={
                <FilterAlt
                  sx={{
                    color:
                      darkMode === "dark"
                        ? colorscheme.white
                        : colorscheme.black,
                  }}
                />
              }
              borderColor={
                darkMode === "dark" ? colorscheme.white : colorscheme.black
              }
            /> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
