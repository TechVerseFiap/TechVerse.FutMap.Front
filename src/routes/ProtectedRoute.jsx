import { Navigate, Outlet } from "react-router";
import { Routes } from "./routes";

export default function ProtectedRoute() {
    const isAuthenticated = false;
    
    return isAuthenticated 
        ? <Outlet/> 
        : <Navigate to={Routes.ForgotPassword} replace />
}