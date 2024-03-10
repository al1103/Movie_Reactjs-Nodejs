import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SiderBarAdmin from "../components/SiderBarAdmin";
import "./style.scss";

const AdminLayout = ({ children }) => {
  return (
    <div
    >
      {/* Sidebar Start */}
      <aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <SiderBarAdmin></SiderBarAdmin>
        {/* End Sidebar scroll*/}
      </aside>
      {children}
    </div>
  );
};

export default AdminLayout;
