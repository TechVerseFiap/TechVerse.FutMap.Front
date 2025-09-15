// src/routes/AppRoutes.jsx
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { Routes } from "./routes.js";

import ProtectedRoute from "./ProtectedRoute.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";

import MainLayout from "../pages/layouts/MainLayout.jsx";
import AuthLayout from "../pages/layouts/AuthLayout.jsx";

const router = createBrowserRouter([
  {
    path: Routes.Root,
    Component: ProtectedRoute,
    children: [
      { 
        path: "",
        Component: MainLayout, 
        children: [
          {
            path: Routes.Profile,
            Component: ProfilePage
          }
        ]
      }
    ]
  },
  {
    path: Routes.Auth,
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to={Routes.Login} replace />
      },
      {
        path: Routes.Login.replace(Routes.Auth + "/", ""),
        Component: LoginPage
      },
      {
        path: Routes.Register.replace(Routes.Auth + "/", ""),
        Component: RegisterPage
      },
    ]
  },
  {
    path: Routes.Unknown,
    Component: NotFoundPage
  },

]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
