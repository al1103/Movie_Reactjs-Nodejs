import React, { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomeRouter from "../routers/homeRouter";
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
import WatchMovie from "../pages/WatchMovie";
import SearchMovies from "../pages/Search";
import ForgetPassword from "../pages/forgetPassword";
import ResetPassword from "../pages/ResetPassword";
import Loading from "../components/Loading";
import UserPage from "../pages/user";
import Info from "../pages/user/info";
import Favs from "../pages/user/favs";
import Bind from "../pages/user/bind";
import Buy from "../pages/user/buy";
import Cards from "../pages/user/cards";
import Cash from "../pages/user/cash";
import Orders from "../pages/user/orders";
import PaymentWeixin from "../pages/user/payment_weixin";
import Upgrade from "../pages/user/upgrade";
import Pay from "../pages/user/pay";
import Reg from "../pages/user/reg";

const RoutersManager = () => {
  const isAdmin = useSelector((state) => {
    try {
      // Check for null or undefined user data directly
      if (
        !state.Movie.user ||
        state.Movie.user === "null" ||
        state.Movie.user === "undefined"
      )
        return false;

      const user = JSON.parse(state.Movie.user);
      return user.role === "admin";
    } catch (error) {
      console.error("Error parsing user data:", error);
      // Handle parsing error (e.g., return false or display an error message)
      return false; // Example, adjust as needed
    }
  });

  return (
    <Routes>
      <Route path="/" element={<HomeRouter />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/search" element={<SearchMovies />} />
      <Route path="/movie/:slug" element={<MovieDetails />} />
      <Route path="/:slug/:name" element={<WatchMovie />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/synthetic/resetPassword" element={<ResetPassword />} />



      <Route path="/user" element={<UserPage />} />
      <Route path="/user/info" element={<Info />} />
      <Route path="/user/favs" element={<Favs />} />
      <Route path="/user/bind" element={<Bind />} />
      <Route path="/user/buy" element={<Buy />} />
      <Route path="/user/cards" element={<Cards />} />
      <Route path="/user/cash" element={<Cash />} />
      <Route path="/user/orders" element={<Orders />} />
      <Route path="/user/payment_weixin" element={<PaymentWeixin />} />
      <Route path="/user/upgrade" element={<Upgrade />} />
      <Route path="/user/pay" element={<Pay />} />
      <Route path="/user/reg" element={<Reg />} />
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
