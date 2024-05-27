import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../action";
import { ToastContainer, toast } from "react-toastify";
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
      className="page-wrapper"
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
                href="#"
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
                <a onClick={handleDropdown}>
                  <svg height={30} viewBox="0 0 46 58" width={30}>
                    <g id="Page-1" fill="none" fillRule="evenodd">
                      <g
                        id="043---Administrator"
                        fillRule="nonzero"
                        transform="translate(-1 -1)"
                      >
                        <path
                          id="Shape"
                          d="m32.015 42s8.835 1.55 11.5 4.1c1.971 1.9 3.2 7.957 3.482 11.475.0652822.3226142-.0048194.6578813-.1938934.9273117-.1890739.2694304-.4805196.4493683-.8061066.4976883h-43.99c-.32558698-.04832-.61703267-.2282579-.80610663-.4976883-.18907397-.2694304-.2591756-.6046975-.19389337-.9273117.28-3.518 1.511-9.575 3.482-11.475 2.661-2.55 11.5-4.1 11.5-4.1z"
                          fill="#35495e"
                        />
                        <path
                          id="Shape"
                          d="m30.907 35.58c.0379928 2.1957995.4579276 4.3682261 1.241 6.42 0 0-2 3-8 3s-8-3-8-3c.782299-2.0519581 1.2018803-4.2243064 1.24-6.42z"
                          fill="#fdd7ad"
                        />
                        <path
                          id="Shape"
                          d="m42.345 22.621c.5294478-.7651038.7622769-1.6967758.655-2.621.1072769-.9242242-.1255522-1.8558962-.655-2.621l-1.617-.323c-.4260036-2.4484995-1.3872011-4.7727878-2.815-6.807l.912-1.368s0-.926-1.39-2.316-2.316-1.39-2.316-1.39l-1.368.912c-2.0342122-1.42779889-4.3585005-2.38899643-6.807-2.815l-.323-1.617c-.7651038-.52944775-1.6967758-.76227687-2.621-.655-.9242242-.10727687-1.8558962.12555225-2.621.655l-.323 1.617c-2.4484995.42600357-4.7727878 1.38720111-6.807 2.815l-1.368-.912s-.926 0-2.316 1.39-1.39 2.316-1.39 2.316l.912 1.368c-1.42779889 2.0342122-2.38899643 4.3585005-2.815 6.807l-1.617.323c-.52944775.7651038-.76227687 1.6967758-.655 2.621-.10727687.9242242.12555225 1.8558962.655 2.621l1.617.323c.42600357 2.4484995 1.38720111 4.7727878 2.815 6.807l-.912 1.368s0 .926 1.39 2.316 2.316 1.39 2.316 1.39l1.368-.912c2.0342122 1.4277989 4.3585005 2.3889964 6.807 2.815l.323 1.617c.7651038.5294478 1.6967758.7622769 2.621.655.9242242.1072769 1.8558962-.1255522 2.621-.655l.323-1.617c2.4484995-.4260036 4.7727878-1.3872011 6.807-2.815l1.368.912s.926 0 2.316-1.39 1.39-2.316 1.39-2.316l-.912-1.368c1.4277989-2.0342122 2.3889964-4.3585005 2.815-6.807z"
                          fill="#95a5a5"
                        />
                        <path
                          id="Shape"
                          d="m34.23 44.91-4.38 4.38c-.3900375.3877236-1.0199625.3877236-1.41 0l-.7-.69-3.6-3.6c6.01 0 8.01-3 8.01-3z"
                          fill="#ecf0f1"
                        />
                        <path
                          id="Shape"
                          d="m24.14 45-3.6 3.6-.69.69c-.3930079.3899779-1.0269921.3899779-1.42 0l-4.37-4.37 2.08-2.92s2 3 8 3z"
                          fill="#ecf0f1"
                        />
                        <path
                          id="Shape"
                          d="m22.14 51-1 8h-5l-4.76-9.47c-.1487504-.3270906-.1105753-.708842.1-1l2.58-3.61 4.37 4.37c.3930079.3899779 1.0269921.3899779 1.42 0l.69-.69z"
                          fill="#d1d4d1"
                        />
                        <path
                          id="Shape"
                          d="m27.14 59h-6l1-8h4z"
                          fill="#e64c3c"
                        />
                        <path
                          id="Shape"
                          d="m36.91 49.53-4.76 9.47h-5.01l-1-8 1.6-2.4.7.69c.3900375.3877236 1.0199625.3877236 1.41 0l4.38-4.38 2.58 3.62c.2105753.291158.2487504.6729094.1 1z"
                          fill="#d1d4d1"
                        />
                        <path
                          id="Shape"
                          d="m27.74 48.6-1.6 2.4h-4l-1.6-2.4 3.6-3.6z"
                          fill="#c03a2b"
                        />
                        <circle
                          id="Oval"
                          cx={24}
                          cy={20}
                          fill="#7f8c8d"
                          r={13}
                        />
                        <circle
                          id="Oval"
                          cx={24}
                          cy={20}
                          fill="#95a5a5"
                          r={6}
                        />
                      </g>
                    </g>
                  </svg>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                  aria-labelledby="drop2"
                  id="dropdown"
                >
                  <div className="message-body">
                    <a className="d-flex align-items-center gap-2 dropdown-item">
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
