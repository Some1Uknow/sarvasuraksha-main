import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PendingVerifications from "./pages/PendingVerifications";
import IssuingAuthorityDashboard from "./pages/Issuer";
import CreateDocument from "./pages/CreateDocument";
import VerificationRequests from "./pages/VerificationRequest";
import InProgress from "./components/InProgress";
import VerifierDashboard from "./pages/Verifier";
import MyDocuments from "./pages/MyDocs";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/individual",
    element: <Dashboard />,
  },
  {
    path: "/documents",
    element: <MyDocuments />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/issuer",
    element: <IssuingAuthorityDashboard />,
  },
  {
    path: "/verifier",
    element: <VerifierDashboard />,
  },
  {
    path: "/create-document",
    element: <CreateDocument />,
  },
  {
    path: "/verification-requests",
    element: <VerificationRequests />,
  },
  {
    path: "/bulk-issuance",
    element: <InProgress />,
  },
  {
    path: "/analytics",
    element: <InProgress />,
  },
  {
    path: "/pending-verifications",
    element: <PendingVerifications />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
