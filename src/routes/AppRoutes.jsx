// src/routes/AppRoutes.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.js";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound.jsx";

export const router = createBrowserRouter([
  {
    path: routes.Root,
    element: <Login />,
    errorElement: <PageNotFound />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
