import { SnackbarProvider } from "notistack";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Auth from "./pages/Auth";
import Products from "./pages/Products";
import Details from "./pages/Details";
import { SettingsProvider } from "./context/Settings";
const App = () => {
  return (
    <SnackbarProvider style={{ fontFamily: "Arial" }}>
      <SettingsProvider>
        <BrowserRouter>
          <Routes>
            <>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/product" element={<Products />} />
              <Route path="/product/:pid" element={<Details />} />
              <Route path="/about" element={<About />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NoPage />} />
            </>
          </Routes>
        </BrowserRouter>
      </SettingsProvider>
    </SnackbarProvider>
  );
};

export default App;
