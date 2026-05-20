import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import UserPage from "./UserPage";
import type { AppDispatch, RootState } from "../store";
import PostPage from "./PostPage";
import ProductPage from "./ProductPage";
import { getUser } from "../features/userSlice";

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isUserActive = useSelector((state: RootState) => state.users.isUserActive);
    const isPostActive = useSelector((state: RootState) => state.posts.isPostActive);
    const isProductActive = useSelector((state: RootState) => state.products.isProductActive);
    const users = useSelector((state: RootState) => state.users.users);

    useEffect(() => {
        if (isUserActive && users.length === 0) {
            dispatch(getUser());
        }
    }, [dispatch, isUserActive, users.length]);
    return (
        <div>
            <Navbar />
            {isUserActive && <UserPage />}
            {isPostActive && <PostPage />}
            {isProductActive && <ProductPage />}
        </div>
    )
}

export default HomePage;
