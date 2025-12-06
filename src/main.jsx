import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./Ruter/Router";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import { ToastContainer } from "react-toastify";


// import AuthProvider from "./Contexts/AuthContext/AuthProvider.jsx";

// import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const root = document.getElementById("root");
// const queryClient = new QueryClient()


ReactDOM.createRoot(root).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
      <AuthProvider>
          <RouterProvider router={router} />
            <ToastContainer />
      </AuthProvider>
    {/* </QueryClientProvider> */}
  </StrictMode>
);
