import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type UserLogin } from "../api/apiClient";
import axios from "axios";
import { authService } from "../services/authService";

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: UserLogin, { rejectWithValue }) => {
        try {
            return await authService(credentials);
        } catch (err) {
            if (axios.isAxiosError(err))
                return rejectWithValue(err.response?.data);

            return rejectWithValue("somwthing went wrong");
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: null as string | null,
        accesstoken: null as string | null,
        loading: false,
        error: null as unknown
    },
    reducers: {
        logout: (state) => {
            state.username = null,
                state.accesstoken = null,
                localStorage.removeItem('accessToken');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false,
                    state.username = action.payload.username,
                    state.accesstoken = action.payload.accessToken

                localStorage.setItem('accessToken', action.payload.accessToken);
                localStorage.setItem('refreshToken', action.payload.refreshToken);

            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    }
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;
