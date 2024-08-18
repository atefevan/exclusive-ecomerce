import { Box } from "@mui/material";
import * as React from "react";
import Background from "../components/Background";
import Timer from "../components/Timer";
import Card from "../components/GridCard";
import Text from "../components/Text";
import { fontSizes } from "../constant/sizes";
import useColorScheme from "../hooks/useColorScheme";
import IconBtn from "../components/IconButton";
import { West, East } from "@mui/icons-material";
import { fetchProducts } from "../api";
import Loader from "../components/Loader";
import Btn from "../components/Btn";
import { new_categories } from "../mock/data";
import { png } from "../assets";
import Divider from "../components/Divider";
import { capitalize } from "../utils/Capitalize";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Home = () => {
  const { colorscheme } = useColorScheme();
  const [products, setProducts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cardContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const res = await fetchProducts();
    setProducts(res);
    setLoading(false);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      cardContainerRef.current?.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      cardContainerRef.current?.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <Background>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        {/* Category Section */}
        <Box sx={{ display: "flex", minHeight: "45vh", pb: "2vh", px: "5vw" }}>
          <Box
            key={"category"}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", md: "30%" },
              alignItems: { xs: "center", md: "start" },
              pt: "3vh",
              pl: "3vw",
            }}
          >
            <Text fontSize={fontSizes.xl} fontWeight={"600"}>
              New Categories
            </Text>
            {new_categories?.map((category, idx) => (
              <Btn
                id={idx.toString()}
                label={capitalize(category)}
                variant="text"
                fontSize={fontSizes.md}
                style={{
                  mt: ".5vh",
                  justifyContent: { xs: "center", md: "start" },
                  width: { xs: "100%", md: "80%" },
                }}
                // onClick={() => navigate(`/product/${category}`)}
              />
            ))}
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Divider
              orientation="vertical"
              width={"90%"}
              color={colorscheme.text}
            />
          </Box>
          {/* Banner */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              width: { xs: "100%", md: "80%" },
              justifyContent: "end",
              overflow: "clip",
            }}
          >
            <Carousel>
              {Array.from(new Array(5)).map((item) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "clip",
                  }}
                >
                  <Box
                    component={"img"}
                    src={png.banner}
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
              ))}
            </Carousel>
          </Box>
        </Box>

        {/* Today's Sales */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            px: "5vw",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "50px",
                  width: "20px",
                  backgroundColor: colorscheme.btn_bg,
                  borderRadius: "5px",
                }}
              />
              <Text
                fontSize={fontSizes.md}
                fontWeight={600}
                custom_color={colorscheme.btn_bg}
                style={{ px: "1vw" }}
              >
                Today's
              </Text>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: { xs: "center", md: "space-between" },
              py: 2,
            }}
          >
            <Text fontSize={fontSizes.xxl}>Flash Sales</Text>
            <Timer styles={{ pl: { xs: "0px", md: "60px" } }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconBtn
                muiIcon={<West />}
                onClick={scrollLeft}
                style={{ marginRight: 1 }}
              />
              <IconBtn
                muiIcon={<East />}
                onClick={scrollRight}
                style={{ marginRight: 1 }}
              />
            </Box>
          </Box>

          <Box
            ref={cardContainerRef}
            sx={{
              display: "flex",
              overflowX: { xs: "auto", md: "hidden" },
              scrollBehavior: "smooth",
              gap: 2,
              pb: 2,
            }}
          >
            {!loading
              ? products?.map((product, index) => (
                  <Card
                    key={product?.id}
                    title={product?.title}
                    img={product?.image}
                    price={product?.price}
                    rating={product.rating.rate}
                    rateCount={product.rating.count}
                  />
                ))
              : Array.from(new Array(8)).map((_, index) => (
                  <Box key={index} sx={{ width: 250 }}>
                    <Loader
                      type="rectangular"
                      width={200}
                      height={190}
                      style={{ borderRadius: "5%" }}
                    />
                    <Loader width="100%" height={10} style={{ mt: 1 }} />
                    <Loader width="100%" height={10} style={{ mt: 1 }} />
                    <Loader width="100%" height={10} style={{ mt: 1 }} />
                  </Box>
                ))}
          </Box>
        </Box>
        <Footer />
      </Box>
    </Background>
  );
};

export default Home;
