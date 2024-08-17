import {
  Apps,
  FilterList,
  Menu,
  Search,
  Sort,
  MonetizationOn,
} from "@mui/icons-material";
import * as React from "react";
import { Box, Grid, Tooltip } from "@mui/material";
import Background from "../components/Background";
import useColorScheme from "../hooks/useColorScheme";
import Dropdown from "../components/Dropdown";
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from "../api";
import Text from "../components/Text";
import Divider from "../components/Divider";
import { fontSizes } from "../constant/sizes";
import RangeBar from "../components/RangeBar";
import InputField from "../components/InputField";
import { enqueueSnackbar } from "notistack";
import ToggleBtn from "../components/ToggleBtn";
import Card from "../components/GridCard";
import { capitalize } from "../utils/Capitalize";
import Footer from "../components/Footer";
import ListCard from "../components/ListCard";
import Pager from "../components/Pager";
import Btn from "../components/Btn";
import IconBtn from "../components/IconButton";
import Loader from "../components/Loader";
import SpeedSelect from "../components/SpeedSelect";

const Products = () => {
  const { colorscheme } = useColorScheme();
  const [formData, setFormData] = React.useState<any>({
    minRange: 30,
    maxRange: 100,
  });
  const [categories, setCategories] = React.useState<string[]>([]);
  const [products, setProducts] = React.useState<any>([]);
  const [loadProducts, setLoadProducts] = React.useState<boolean>(false);
  const [loadCategories, setLoadCategories] = React.useState<boolean>(false);
  const [range, setRange] = React.useState<number[]>([30, 100]);
  const [view, setView] = React.useState<"left" | "right">("left");
  const [filteredProducts, setFilteredProducts] = React.useState<any[]>([]);
  const [productQuery, setProductQuery] = React.useState<string>("");
  const [allProducts, setAllProducts] = React.useState<[]>([]);

  // FOR SORTING
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc");
  const [sortBy, setSortBy] = React.useState<"price" | "rating">("price");
  const [currentProducts, setCurrentProducts] = React.useState<any[]>([]);
  const itemsPerPage = 3;
  const [page, setPage] = React.useState<number>(1);

  React.useEffect(() => {
    getAllProducts();
  }, []);
  React.useEffect(() => {
    getCategories();
  }, []);

  React.useEffect(() => {
    if (formData.category) {
      getProductsCategory();
    }
  }, [formData.category]);

  React.useEffect(() => {
    if (productQuery) {
      setFilteredProducts(
        allProducts.filter((product: any) =>
          product?.title.toString().includes(productQuery)
        )
      );
    } else {
      setFilteredProducts(allProducts);
    }
  }, [productQuery]);

  React.useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortBy === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      } else if (sortBy === "rating") {
        return sortOrder === "asc"
          ? a.rating.rate - b.rating.rate
          : b.rating.rate - a.rating.rate;
      }
      return 0;
    });
    setCurrentProducts(
      sortedProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    );
  }, [products, page, sortOrder, sortBy]);

  const handleFormDataInput = (e: any) => {
    e.preventDefault();
    let obj: any = {};
    const key: string = e.target.id ? e.target.id : e.target.name;
    obj[key] = e.target.value;

    if (key === "minRange" || key === "maxRange") {
      const updatedRange = {
        ...formData,
        [key]: parseInt(e.target.value),
      };
      setRange([updatedRange.minRange, updatedRange.maxRange]);
    }

    setFormData({ ...formData, ...obj });
  };

  const getAllProducts = async () => {
    await fetchProducts()
      .then((res) => {
        setAllProducts(res);
      })
      .catch((err) => {
        console.log("Failed All Prodcuts : ", err);
      });
  };

  const handleRangeChange = (newRange: number[]) => {
    setRange(newRange);

    setFormData({
      ...formData,
      minRange: newRange[0],
      maxRange: newRange[1],
    });
  };

  const getCategories = async () => {
    setLoadCategories(true);
    fetchCategories()
      .then((res) => {
        setCategories(res);
        setFormData({ ...formData, category: res[0] });
      })
      .catch((err) => console.log("Failed Reason Categories : ", err))
      .finally(() => {
        setLoadCategories(false);
      });
  };

  const getProductsCategory = async () => {
    setLoadProducts(true);
    if (formData.category) {
      fetchProductsByCategory(formData.category)
        .then((res) => {
          setProducts(res);
        })
        .catch((err) =>
          console.log("Failed Reason Products by Categories : ", err)
        )
        .finally(() => {
          setLoadProducts(false);
        });
    } else {
      return enqueueSnackbar("Category not selected !", {
        variant: "error",
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSortChange = (order: "asc" | "desc") => {
    setSortOrder(order);
  };

  const handleSortByChange = (criteria: "price" | "rating") => {
    setSortBy(criteria);
  };

  return (
    <Background>
      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
      >
        <Box sx={{ display: "flex", flex: 1, alignItems: "center" }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              height: "100%",
              minWidth: "300px",
              // backgroundColor: colorscheme.beige500,
            }}
          >
            {/* Filter Categories */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginInline: 2,
                mt: "20%",
              }}
            >
              <Text fontSize={fontSizes.md}>Categories</Text>
              <Dropdown
                id="category"
                name="category"
                key="category"
                size="small"
                value={formData?.category || ""}
                items={[...categories]}
                onChange={handleFormDataInput}
              />
            </Box>

            {/* Filter Price Range */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginInline: 2,
                mt: "20%",
              }}
            >
              <Text fontSize={fontSizes.md}>Price Range</Text>
              <RangeBar min={10} value={range} setValue={handleRangeChange} />
              <Box sx={{ display: "flex", mt: "1vh" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Text>Min</Text>
                  <InputField
                    id="minRange"
                    name="minRange"
                    key="minRange"
                    placeHolder="min"
                    style={{ mr: "15px", width: "120px" }}
                    size="small"
                    fontSize={fontSizes.sm}
                    prefixIcon={<MonetizationOn />}
                    value={formData.minRange}
                    fieldOnChange={handleFormDataInput}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Text>Max</Text>
                  <InputField
                    id="maxRange"
                    name="maxRange"
                    key="maxRange"
                    placeHolder="max"
                    style={{ mr: "15px", width: "120px" }}
                    size="small"
                    fontSize={fontSizes.sm}
                    prefixIcon={<MonetizationOn />}
                    value={formData.maxRange}
                    fieldOnChange={handleFormDataInput}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                px: "1vw",
                pt: "7vh",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text fontSize={fontSizes.xl}>Sort By</Text>
                <Box sx={{ display: "flex" }}>
                  <Tooltip title="Ascending" arrow>
                    <Box>
                      <IconBtn
                        muiIcon={<FilterList />}
                        height={"30px"}
                        width={"30px"}
                        style={{ mx: "10px" }}
                        bgColor={
                          sortOrder === "asc"
                            ? colorscheme.success
                            : colorscheme.white
                        }
                        hoverColor={
                          sortOrder === "asc"
                            ? colorscheme.success
                            : colorscheme.white
                        }
                        onClick={() => handleSortChange("asc")}
                      />
                    </Box>
                  </Tooltip>
                  <Tooltip title="Descending" arrow>
                    <Box>
                      <IconBtn
                        muiIcon={<Sort />}
                        height={"30px"}
                        width={"30px"}
                        bgColor={
                          sortOrder === "desc"
                            ? colorscheme.success
                            : colorscheme.white
                        }
                        hoverColor={
                          sortOrder === "desc"
                            ? colorscheme.success
                            : colorscheme.white
                        }
                        onClick={() => handleSortChange("desc")}
                      />
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Btn
                  variant={sortBy === "price" ? "contained" : "outlined"}
                  label={"Price"}
                  width={"50%"}
                  size="small"
                  fontSize={fontSizes.sm}
                  style={{ m: "5px" }}
                  onClick={() => handleSortByChange("price")}
                />
                <Btn
                  variant={sortBy === "rating" ? "contained" : "outlined"}
                  label={"Rating"}
                  width={"50%"}
                  size="small"
                  fontSize={fontSizes.sm}
                  style={{ m: "5px" }}
                  onClick={() => handleSortByChange("rating")}
                />
              </Box>
            </Box>
          </Box>

          <Divider
            width={"90%"}
            orientation="vertical"
            style={{ display: { xs: "none", md: "block" } }}
            color={colorscheme.text}
          />

          <Box
            sx={{
              display: "flex",
              height: "90vh",
              width: "100%",
              flexDirection: "column",
              // backgroundColor: colorscheme.limegreen500,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "10%",
                width: "100%",
              }}
            >
              <Text
                fontSize={fontSizes.xl}
                style={{ ml: { xs: "10px", md: "0px" } }}
              >
                {capitalize(formData.category)}
              </Text>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                }}
              >
                <SpeedSelect
                  id="product-query"
                  size="small"
                  options={[...filteredProducts]}
                  placeHolder="Looking for ?"
                  label=""
                  value={productQuery}
                  setValue={(value) => setProductQuery(value)}
                  style={{ width: "250px", px: "1vw" }}
                />
                <ToggleBtn
                  leftIcon={<Apps sx={{ color: colorscheme.text }} />}
                  rightIcon={<Menu sx={{ color: colorscheme.text }} />}
                  style={{ px: "1vw" }}
                  selected={view}
                  setSelected={setView}
                />
              </Box>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                overflow: "scroll",
              }}
            >
              {view === "right" ? (
                <Grid
                  container
                  spacing={{ xs: 2, md: 4 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  wrap="wrap"
                  sx={{
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: { xs: "center", md: "flex-start" },
                    overflowX: "hidden",
                  }}
                >
                  {products?.map((product: any, index: number) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Card
                        key={product?.id}
                        title={product?.title}
                        img={product?.image}
                        price={product?.price}
                        rating={product.rating.rate}
                        rateCount={product.rating.count}
                        style={{ maxWidth: "200px" }}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "start",
                  }}
                >
                  {!loadProducts && !loadCategories
                    ? currentProducts?.map((product: any, index: number) => (
                        <ListCard key={index} product={product} hasFavourite />
                      ))
                    : Array.from(new Array(3)).map((_, index) => (
                        <Box key={index} sx={{ display: "flex" }}>
                          <Loader
                            type="rectangular"
                            width={"100%"}
                            height={190}
                            style={{ borderRadius: "10px", margin: "5px" }}
                          />
                        </Box>
                      ))}

                  <Pager
                    size={Math.ceil(products.length / itemsPerPage)}
                    page={page}
                    onChange={handleChange}
                    style={{ alignSelf: "center", marginTop: "10px" }}
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Background>
  );
};

export default Products;
