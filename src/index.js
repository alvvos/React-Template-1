import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacto",
    element: <Contact />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);