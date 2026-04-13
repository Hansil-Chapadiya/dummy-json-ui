import { createBrowserRouter, Navigate } from "react-router";
import LoginForm from "../components/LoginForm";
import ProtectedRoute from "./protectedRoute";
import HomePage from "../pages/HomePage";
import PublicRoute from "./PublicRoute";
import PostPage from "../pages/PostPage";
// import UserPage from "../pages/UserPage";

const routes = [
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                index: true,
                element: <Navigate to={'/home'} replace />
            },
            {
                path: 'home',
                element: <HomePage />
            },
            {
                path: 'posts',
                element: <PostPage />
            }
        ]
    },
    {
        path: "/login",
        element: (
            <PublicRoute>
                <LoginForm />
            </PublicRoute>
        )
    },
]

export const routers = createBrowserRouter(routes);