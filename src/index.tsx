import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./ErrorPage";
import AdventCalendarContextProvider from "./context/AdventCalendarContextProvider";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <Navigate to="/" replace /> // Redirect all undefined routes to home
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AdventCalendarContextProvider>
      <RouterProvider router={router} />
    </AdventCalendarContextProvider>
  </StrictMode>
);
