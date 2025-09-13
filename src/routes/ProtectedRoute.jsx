import { Navigate, Outlet } from "react-router";
import { Routes } from "./routes";

export default function ProtectedRoute() {
    const isAuthenticated = true;
    
    return isAuthenticated 
        ? <Outlet/> 
        : <Navigate to={Routes.Test} replace />
}