import React, { Children } from "react";
import Navbar from "../components/Navbar";
import Footer from "../pages/user/footer";
import Left from "../pages/user/left";
import { ToastContainer } from 'react-toastify';
// import "../pages/user/css/ewave-member.css";
// import "../pages/user/css/ewave-plugins.css";
// import "../pages/user/css/ewave-style.css";
// import "../pages/user/css/ewave-ui.css";

import "./style.scss"

const UserLayout = ({children}) => {
  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="container member-container clearfix setTop">
        <Left></Left>
        <div className="children">{children}</div>
      </div>
      {/* <Footer></Footer> */}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UserLayout;
