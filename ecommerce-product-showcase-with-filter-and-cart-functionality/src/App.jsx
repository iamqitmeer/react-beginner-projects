import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import Contact from "./Screens/Contact";
import About from "./Screens/About";
import AppLayout from "./Components/AppLayout";
import ProductCard from "./Components/ProductCard";
import ProductDetailPage from "./Components/ProductDetailPage";
import Register from "./Screens/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <ProductDetailPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
