import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import BookNow from "./BookNow.jsx";
import AllDoctors from "./AllDoctors.jsx";

import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Root from "./Root.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import Bookings from "./Bookings.jsx";
import DoctorDetails from "./DoctorDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/alldoctors",
        element: <AllDoctors></AllDoctors>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/booknow",
        element: <BookNow></BookNow>,
      },
      {
        path: "/bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "/doctor/:id",
        element: <DoctorDetails></DoctorDetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
