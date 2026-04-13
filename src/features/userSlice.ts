import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { userService } from "../services/userService";
import axios from "axios";

export type User = {
    id: number;
    firstName: string;
}

type UsersResponse = {
    users: User[];
}

type UserState = {
    users: User[];
    loading: boolean;
    error: unknown | null;
    isUserActive: boolean;
}

export const getUser = createAsyncThunk(
    'users/get',
    async (_, { rejectWithValue }): Promise<UsersResponse | ReturnType<typeof rejectWithValue>> => {
        try {
            return await userService();
        } catch (err) {
            if (axios.isAxiosError(err))
                return rejectWithValue(err.response?.data);

            return rejectWithValue("something went wrong");
        }
    }
)

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    isUserActive: false
}


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserActive: (state, action: PayloadAction<boolean>) => {
            state.isUserActive = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload.users
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })
    }
})

export const { setUserActive } = userSlice.actions;

export default userSlice.reducer;
