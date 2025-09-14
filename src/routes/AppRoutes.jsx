// src/routes/AppRoutes.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import { Routes } from "./routes.js";
import LoginPage from "../pages/LoginPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import MainLayout from "../pages/MainLayout.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";
import EventPage from "../pages/EventPage.jsx";

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
          },
          {
            path: Routes.Event,
            Component: EventPage
          }
        ]
      }
    ]
  },
  {
    path: Routes.Login,
    Component: LoginPage
  },
  {
    path: Routes.Unknown,
    Component: NotFoundPage
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
