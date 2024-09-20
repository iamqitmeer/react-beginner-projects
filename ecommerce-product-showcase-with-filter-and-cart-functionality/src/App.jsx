import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import Contact from "./Screens/Contact";
import About from "./Screens/About";
import AppLayout from "./Components/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children : [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
    }
  ]);

  return (
    <div>
    <RouterProvider router={router} />
  </div>
  )
}

export default App;
