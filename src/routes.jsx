import App from "./App";
import RouteError from "./components/RouteError";
import HomePage from "./features/HomePage/HomePage";
import ProductsPage from "./features/ProductsPage/ProductsPage";
import CartPage from "./features/ShoppingCart/CartPage";
export default [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "*", element: <RouteError /> },
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "card", element: <CartPage /> },
    ],
  },
];
