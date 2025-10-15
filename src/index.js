import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LegalNotice from "./pages/LegalNotice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "/privacidad",
    element: <PrivacyPolicy />,
  },
  { path: "/legal", element: <LegalNotice /> },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
