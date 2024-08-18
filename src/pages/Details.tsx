import * as React from "react";
import Background from "../components/Background";
import { Box, Icon, Rating } from "@mui/material";
import useColorScheme from "../hooks/useColorScheme";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../api";
import Text from "../components/Text";
import { fontSizes } from "../constant/sizes";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import { ShoppingCart, Lens } from "@mui/icons-material";
import Btn from "../components/Btn";
import Lottie from "lottie-react";
import { lottie } from "../assets";
const Details = () => {
  const { colorscheme } = useColorScheme();
  const { pid } = useParams();
  const [detail, setDetail] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [selectColor, setSelectColor] = React.useState<string>("");
  React.useEffect(() => {
    setLoading(true);
    getProductDetail();
  }, []);

  const getProductDetail = () => {
    fetchProduct(pid!)
      .then((res) => {
        setDetail(res);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Background>
      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
      >
        {!loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              height: "100vh",
              width: "100%",
              overflow: "scroll",
            }}
          >
            {/* Product image */}
            <Box
              sx={{
                display: "flex",
                mt: { xs: "10vh",md:"0vh" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "40%",
                  display: "flex",
                  backgroundColor: "white",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "clip",
                }}
              >
                <Box
                  component={"img"}
                  src={detail?.image}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    backgroundSize: "cover",
                  }}
                />
              </Box>
            </Box>

            {/* Product Details */}
            <Box
              sx={{
                display: "flex",
                flex: 1,
                mt: { xs: "2vh", md: "0vh" },
                justifyContent: { xs: "start", md: "center" },
                alignItems: { xs: "center", md: "center" },
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "15px",
                  width: { xs: "60vw", md: "450px" },
                }}
              >
                <Text
                  style={{
                    textAlign: "start",
                    fontSize: { xs: fontSizes.md, md: fontSizes.lg },
                  }}
                >
                  {detail?.title}
                </Text>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex" }}>
                    <Rating
                      name="product-rating"
                      value={detail?.rating?.rate}
                      readOnly
                    />
                    <Text fontSize={fontSizes.md} marginLeft={1}>
                      ({detail?.rating?.count})
                    </Text>
                  </Box>
                  <Divider
                    width={"50%"}
                    orientation="vertical"
                    color={colorscheme.text}
                  />
                  <Box sx={{ display: "flex" }}>
                    <Text
                      style={{
                        mx: "5px",
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      In Stock
                    </Text>
                    <Icon>
                      {<ShoppingCart sx={{ color: colorscheme.success }} />}
                    </Icon>
                  </Box>
                </Box>
                <Text
                  style={{
                    textAlign: "start",
                    fontSize: { xs: fontSizes.lg, md: fontSizes.xl },
                  }}
                >
                  $ {detail?.price}
                </Text>
                <Divider width={"100%"} color={colorscheme.text} />

                <Text
                  style={{
                    textAlign: "start",
                    fontSize: { xs: fontSizes.sm, md: fontSizes.sm },
                    mt: "3vh",
                  }}
                >
                  {detail?.description?.toString().slice(0, 240)}
                </Text>
                <Text
                  style={{
                    textAlign: "start",
                    fontSize: { xs: fontSizes.sm, md: fontSizes.lg },
                    mt: "1vh",
                  }}
                >
                  Colors :
                  <Box sx={{ display: "flex" }}>
                    <Lens
                      sx={{
                        color: colorscheme.red500,
                        border:
                          selectColor === `${colorscheme.red500}`
                            ? `2px soild ${colorscheme.black}`
                            : `0px soild ${colorscheme.transparent}`,
                      }}
                      onClick={() => {
                        setSelectColor(colorscheme.red500);
                      }}
                    />
                    <Lens
                      sx={{
                        color: colorscheme.success,
                        border:
                          selectColor === `${colorscheme.success}`
                            ? `2px soild ${colorscheme.black}`
                            : `0px soild ${colorscheme.transparent}`,
                      }}
                      onClick={() => {
                        setSelectColor(colorscheme.success);
                      }}
                    />
                  </Box>
                </Text>
                <Btn
                  label={"Buy Now"}
                  width={"100%"}
                  variant={"contained"}
                  bgColor={colorscheme.teal}
                  fontSize={fontSizes.md}
                  style={{ my: "10px" }}
                />
              </Box>
            </Box>
          </Box>
        ) : (
          // Loading Animation
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Lottie
                loop={true}
                animationData={lottie.loadingLottie}
                style={{ width: "300px", height: "300px" }}
              />
            </Box>
          </Box>
        )}
        <Footer />
      </Box>
    </Background>
  );
};

export default Details;
