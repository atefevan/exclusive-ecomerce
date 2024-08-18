import { Box } from "@mui/material";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Text from "../components/Text";
import { fontSizes } from "../constant/sizes";
const Auth = () => {
  return (
    <Background>
      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
      >
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text fontSize={fontSizes.xxl} fontWeight={"bold"}>LOGIN / SIGNUP </Text>
        </Box>
        <Footer />
      </Box>
    </Background>
  );
};

export default Auth;
