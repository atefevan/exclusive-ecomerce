const baseUrl = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${baseUrl}/products`);

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed Response :", error);
    return [];
  }
};

export const fetchProduct = async (id: string) => {
  try {
    const response = await fetch(`${baseUrl}/product/${id}`);

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed Response :", error);
    return [];
  }
};

export const fetchProductsByCategory = async (item: string) => {
  try {
    const response = await fetch(`${baseUrl}/products/category/${item}`);

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed Response :", error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/products/categories`);

    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed Response :", error);
    return [];
  }
};
