import { fetchProducts } from "../api/apiClient"

export const productService = async () => {
    const res = await fetchProducts();
    console.log('product', res.data);
    return res.data;
}