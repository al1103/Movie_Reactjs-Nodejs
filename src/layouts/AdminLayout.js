import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../action";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../components/Footer";
import SiderBarAdmin from "../components/SiderBarAdmin";

import "./style.scss";

const AdminLayout = ({ children }) => {
  const dispatch = useDispatch();

  const handleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location.href = "/";
  };

  return (
    <div
      class="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item d-block d-xl-none">
              <a
                className="nav-link sidebartoggler nav-icon-hover"
                id="headerCollapse"
              >
                <i className="ti ti-menu-2" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-icon-hover">
                <i className="ti ti-bell-ringing" />
                <div className="notification bg-primary rounded-circle" />
              </a>
            </li>
          </ul>
          <div
            className="navbar-collapse justify-content-end px-0"
            id="navbarNav"
          >
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
              <li className="nav-item dropdown">
                <a
                  onClick={handleDropdown}
                  className="nav-link nav-icon-hover"
                  id="drop2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                  src=""
                    alt
                    width={35}
                    height={35}
                    className="rounded-circle"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                  aria-labelledby="drop2"
                  id="dropdown"
                >
                  <div className="message-body">
                    <a
                      className="d-flex align-items-center gap-2 dropdown-item"
                    >
                      <i className="ti ti-user fs-6" />
                      <p className="mb-0 fs-3">My Profile</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="d-flex align-items-center gap-2 dropdown-item"
                    >
                      <i className="ti ti-mail fs-6" />
                      <p className="mb-0 fs-3">My Account</p>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="d-flex align-items-center gap-2 dropdown-item"
                    >
                      <i className="ti ti-list-check fs-6" />
                      <p className="mb-0 fs-3">My Task</p>
                    </a>
                    <button
                      onClick={handleLogout}
                      className="btn btn-outline-primary mx-3 mt-2 d-block"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="d-flex flex-column flex-lg-row">
        <SiderBarAdmin></SiderBarAdmin>
        {children}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AdminLayout;
