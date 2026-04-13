import { Navigate } from "react-router";
import type { ReactNode } from "react";

type PublicRouteProps = {
    children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
    const token = localStorage.getItem('accessToken');

    if (token) return <Navigate to={'/home'} replace />;

    return <>{children}</>;
}

export default PublicRoute;