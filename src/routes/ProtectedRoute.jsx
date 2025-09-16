// ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router";
import { Routes } from "./routes";
import { getAuthenticated } from "../hooks/useAuth";
import { useEffect, useState } from "react";

export default function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(getAuthenticated());

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(getAuthenticated());
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to={Routes.Login} replace />;
}
