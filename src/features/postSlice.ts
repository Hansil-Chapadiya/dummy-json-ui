import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { postService } from "../services/postService";
import axios from "axios";

export type Post = {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions?: {
        likes: number,
        dislikes: number
    },
    views?: number
}

type PostResponse = {
    posts: Post[]
}

type PostState = {
    posts: Post[];
    loading: boolean;
    error: unknown | null;
    isPostActive: boolean;
}


export const getPosts = createAsyncThunk(
    'posts/get',
    async (_, { rejectWithValue }): Promise<PostResponse | ReturnType<typeof rejectWithValue>> => {
        try {
            return await postService();
        } catch (err) {
            if (axios.isAxiosError(err))
                return rejectWithValue(err.response?.data);

            return rejectWithValue("Something went wrong");
        }
    }
)

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null as unknown,
    isPostActive: false
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPostActive: (state, action: PayloadAction<boolean>) => {
            state.isPostActive = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload.posts
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload;
            })
    }

})

export const { setPostActive } = postSlice.actions;
export default postSlice.reducer;