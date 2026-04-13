import { NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import type { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { getUser, setUserActive } from "../features/userSlice";
import { getPosts, setPostActive } from "../features/postSlice";
import { getProduct, setProductActive } from "../features/productSlice";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleUser = () => {
        dispatch(setUserActive(true));
        dispatch(setPostActive(false));
        dispatch(setProductActive(false));
        dispatch(getUser());
    }

    const handlePost = () => {
        dispatch(setPostActive(true));
        dispatch(setUserActive(false));
        dispatch(setProductActive(false));
        dispatch(getPosts());
    }

    const handleProduct = () => {
        dispatch(setProductActive(true));
        dispatch(setPostActive(false));
        dispatch(setUserActive(false));
        dispatch(getProduct());
    }

    return (
        <div className="container">
            <ul className="nav-container">
                <li><NavLink to={"/"} className={'link'} onClick={() => { handleUser() }}>USERS</NavLink></li>
                <li><NavLink to={"/"} className={'link'} onClick={() => { handlePost() }}>POSTS</NavLink></li>
                <li><NavLink to={"/"} className={'link'} onClick={() => { handleProduct() }}>PRODUCTS</NavLink></li>
            </ul>
            <button onClick={() => { dispatch(logout()); navigate('/login') }}>Logout</button>
        </div>
    )
}

export default Navbar;
