import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./features/authSlice";
import usersReducers from "./features/userSlice";
import postsReducers from "./features/postSlice";
import productReducers from "./features/productSlice";

const store = configureStore({
    reducer: {
        auth: authReducers,
        users: usersReducers,
        posts: postsReducers,
        products: productReducers
    }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;