import React, { Fragment, createContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomeRouter from "../routers/homeRouter"; // Standardized variable name
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/register";
import AddMovie from "../pages/admin/AdminMovie/addMovie";
import EditMovie from "../pages/admin/AdminMovie/editMovie";
import { useSelector } from "react-redux";
import NotFound from "../pages/404";
import Admin from "../pages/admin/AdminMovie/ManagerMovie";
import MovieDetails from "../pages/MovieDetails";
const RoutersManager = () => {
  const navigate = useNavigate();

  const getAdmin = useSelector((state) => state.Movie.user);
  const isAdmin =
    JSON.parse(localStorage.getItem("user"))?.role === "admin" ||
    getAdmin?.role === "admin";

  return (
    <Routes>
      <Route path="/" element={<HomeRouter />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/admin/edit/:slug"
        element={isAdmin ? <EditMovie /> : <LoginPage />}
      />
      <Route
        path="/admin/addMovie"
        element={isAdmin ? <AddMovie /> : <LoginPage />}
      />
      <Route path="/admin" element={isAdmin ? <Admin /> : <LoginPage />} />
      <Route path="/movie/:slug" element={<MovieDetails />} />
      <Route path="*" element={<NotFound/> } />
    </Routes>
  );
};

export default RoutersManager;