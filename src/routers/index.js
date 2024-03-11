import React, { Fragment, createContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeRouter from "../routers/homeRouter"; // Standardized variable name
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/register";
import AddMovie from "../pages/admin/AdminMovie/addMovie";
import EditMovie from "../pages/admin/AdminMovie/editMovie";
import { useSelector } from "react-redux";
import NotFound from "../pages/404";

import UserManager from "../pages/admin/AdminUser/UserManager";
import EditUser from "../pages/admin/AdminUser/EditUser";
import Dashboard from "../pages/admin/Dashboard";
import MovieDetails from "../pages/MovieDetails";
import ManagerMovie from "../pages/admin/AdminMovie/ManagerMovie";
const RoutersManager = () => {
  const getAdmin = useSelector((state) => state.Movie.user);
  const isAdmin =
    JSON.parse(localStorage.getItem("user"))?.role === "admin" ||
    getAdmin?.role === "admin";

  return (
    <Routes>
      <Route path="/" element={<HomeRouter />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/movie/:slug" element={<MovieDetails />} />

      <Route
        path="/admin/userManager"
        element={isAdmin ? <UserManager /> : <LoginPage />}
      />

      <Route
        path="/admin/movieManager"
        element={isAdmin ? <ManagerMovie /> : <LoginPage />}
      />
      <Route
        path="/admin/editMovie/:slug"
        element={isAdmin ? <EditMovie /> : <LoginPage />}
      />
      <Route
        path="/admin/editUser/:slug"
        element={isAdmin ? <EditUser /> : <LoginPage />}
      />
      <Route
        path="/admin/addMovie"
        element={isAdmin ? <AddMovie /> : <LoginPage />}
      />
      <Route path="/admin" element={isAdmin ? <Dashboard /> : <LoginPage />} />
      <Route path="/movie/:slug" element={<MovieDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutersManager;
