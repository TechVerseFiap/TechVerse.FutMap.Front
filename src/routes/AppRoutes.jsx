// src/routes/AppRoutes.jsx
import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes.js";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    path: routes.Root,
    element: <Login />,
    errorElement: <PageNotFound />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
