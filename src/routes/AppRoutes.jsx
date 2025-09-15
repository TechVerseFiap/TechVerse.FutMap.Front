// src/routes/AppRoutes.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import { Routes } from "./routes.js";
import LoginPage from "../pages/LoginPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import UserPage from "../pages/UserPage.jsx";
import CompanyPage from "../pages/CompanyPage.jsx";

const router = createBrowserRouter([
  {
    path: Routes.Root,
    Component: ProtectedRoute,
    children: [{ index: true, Component: MainLayout }],
  },
  {
    path: Routes.Login,
    Component: LoginPage,
  },
  {
    path: Routes.Unknown,
    Component: NotFoundPage,
  },
  {
    path: Routes.User,
    Component: UserPage,
  },
  {
    path: Routes.Company,
    Component: CompanyPage,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
