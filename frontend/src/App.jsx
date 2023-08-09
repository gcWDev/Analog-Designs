import React from "react";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLocation,
} from "react-router-dom";
import Register from "./components/pages/Auth/Register/Register";
import Login from "./components/pages/Auth/Login/Login";
import HomeLayout from "./layouts/HomeLayout.jsx";
import Home from "./components/pages/Home/Home";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Order from "./components/pages/Dashboard/Order";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route path="account" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="order" element={<Order />} />
      </Route>
      <Route index element={<Home />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={route} />;
}
