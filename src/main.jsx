import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App outlet={<ErrorPage />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
