// src/routes/AppRoutes.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import { Routes } from "./routes.js";
import LoginPage from "../pages/LoginPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import NewsCard from "../components/NewsCard.jsx";

const router = createBrowserRouter([
  {
    path: Routes.Root,
    Component: ProtectedRoute,
    children: [
      { index: true, path: Routes.Unknown, Component: NewsCard},
    ]
  },
  {
    path: Routes.Login,
    Component: LoginPage
  },
  {
    path: Routes.Register,
    Component: LoginPage
  },
  {
    path: Routes.Unknown,
    Component: NotFoundPage
  },
  {
    path: Routes.Test,
    Component: NewsCard
  }
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
