import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import UserPage from "./UserPage";
import type { RootState } from "../store";
import PostPage from "./PostPage";
import ProductPage from "./ProductPage";

const HomePage = () => {
    const isUserActive = useSelector((state: RootState) => state.users.isUserActive);
    const isPostActive = useSelector((state: RootState) => state.posts.isPostActive);
    const isProductActive = useSelector((state: RootState) => state.products.isProductActive);
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
