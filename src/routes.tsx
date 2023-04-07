import type { Route } from "@tanstack/react-location";
import { Navigate, Outlet } from "@tanstack/react-location";
import ProtectedRoute from "components/Core/ProtectedRoute/ProtectedRoute";
import PageWrapper from "components/Layout/PageWrapper/PageWrapper";
import SignIn from "pages/Auth/Login/Login";
import Categories from "pages/Categories/Categories";
import Dashboard from "pages/Dashboard/Dashboard";
import NotFound from "pages/NotFound/NotFound";
import Products from "pages/Products/Products";
import SingleProductView from "pages/Products/SingleProductView/SingleProductView";
import type { LocationGenerics } from "util/types/Location";
import AddProduct from "./pages/Products/AddProduct/AddProduct";

const routes: Route<LocationGenerics>[] = [
  {
    path: "/",
    element: <Navigate to="/user/dashboard" replace />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: (
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "products",
        element: (
          <ProtectedRoute type="authenticated">
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/",
            element: <Products />,
          },
          {
            path: "add",
            element: <AddProduct />,
          },
          {
            path: ":productId",
            element: <SingleProductView />,
          },
        ],
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute type="authenticated">
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/",
            element: <Categories />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export default routes;
