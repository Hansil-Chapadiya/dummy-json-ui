import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { productService } from "../services/productService"
import axios from "axios"

type Product = {
    id: number,
    title: string
}

type ProductResponse = {
    products: Product[]
}

type ProductState = {
    products: Product[],
    loading: boolean,
    error: unknown | null,
    isProductActive: boolean
}

export const getProduct = createAsyncThunk(
    'products/get',
    async (_, { rejectWithValue }): Promise<ProductResponse | ReturnType<typeof rejectWithValue>> => {
        try {
            return await productService();
        } catch (err) {
            if (axios.isAxiosError(err))
                return rejectWithValue(err.response?.data);
            return rejectWithValue("something went wrong");
        }
    }
)

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
    isProductActive: false
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductActive: (state, action: PayloadAction<boolean>) => {
            state.isProductActive = action.payload
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(getProduct.pending, (state) => {
            state.loading = true
        })
        .addCase(getProduct.fulfilled, (state,action) => {
            state.loading = false,
            state.products = action.payload.products
        })
        .addCase(getProduct.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload
        })
    }
});

export const {setProductActive} = productSlice.actions;
export default productSlice.reducer;