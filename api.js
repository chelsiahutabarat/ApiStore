const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};