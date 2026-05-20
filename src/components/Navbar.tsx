import { NavLink, useNavigate } from "react-router";
import "../styles/Navbar.css";
import type { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { getUser, setUserActive } from "../features/userSlice";
import { getPosts, setPostActive } from "../features/postSlice";
import { getProduct, setProductActive } from "../features/productSlice";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleUser = () => {
        dispatch(setUserActive(true));
        dispatch(setPostActive(false));
        dispatch(setProductActive(false));
        dispatch(getUser());
        setIsMenuOpen(false);
    }

    const handlePost = () => {
        dispatch(setPostActive(true));
        dispatch(setUserActive(false));
        dispatch(setProductActive(false));
        dispatch(getPosts());
        setIsMenuOpen(false);
    }

    const handleProduct = () => {
        dispatch(setProductActive(true));
        dispatch(setPostActive(false));
        dispatch(setUserActive(false));
        dispatch(getProduct());
        setIsMenuOpen(false);
    }

    return (
        <div className="container">
            <button
                className="hamburger"
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                <span />
                <span />
                <span />
            </button>

            <ul className={`nav-container ${isMenuOpen ? "open" : ""}`}>
                <li><NavLink to={"/"} className={'link'} onClick={() => { handleUser() }}>USERS</NavLink></li>
                <li><NavLink to={"/"} className={'link'} onClick={() => { handlePost() }}>POSTS</NavLink></li>
                <li><NavLink to={"/"} className={'link'} onClick={() => { handleProduct() }}>PRODUCTS</NavLink></li>
            </ul>
            <button className="logout" onClick={() => { dispatch(logout()); navigate('/login') }}>Logout</button>
        </div>
    )
}

export default Navbar;
