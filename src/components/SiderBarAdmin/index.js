import React from "react";
import { Link } from "react-router-dom";

const SiderBarAdmin = () => {
  return (
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <a href="./index.html" className="text-nowrap logo-img">
          <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
        </a>
        <div
          className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
          id="sidebarCollapse"
        >
          <i className="ti ti-x fs-8" />
        </div>
      </div>
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar>
        <ul id="sidebarnav">
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Home</span>
          </li>
          <li className="sidebar-item">
            <Link
              className="sidebar-link"
             to={"/admin"}
              aria-expanded="false"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  id="dashboard"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                </svg>
              </span>
              <span className="hide-menu">Dashboard</span>
            </Link>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">UI COMPONENTS</span>
          </li>
          <li className="sidebar-item">
            <Link
              className="sidebar-link"
             to={"/admin/addMovie"}
              aria-expanded="false"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit={2}
                  width={24}
                  height={24}
                  clipRule="evenodd"
                  viewBox="0 0 64 64"
                  id="movie"
                >
                  <g transform="translate(-2768 -328)">
                    <path d="M2830,332C2830,330.895 2829.11,330 2828,330L2772,330C2770.89,330 2770,330.895 2770,332L2770,388C2770,389.105 2770.89,390 2772,390L2828,390C2829.11,390 2830,389.105 2830,388L2830,332ZM2826,386L2826,382L2822,382L2822,386L2826,386ZM2782,378L2782,386L2818,386L2818,378L2782,378ZM2778,386L2778,382L2774,382L2774,386L2778,386ZM2774,374L2774,378L2778,378L2778,374L2774,374ZM2826,378L2826,374L2822,374L2822,378L2826,378ZM2818,346L2782,346L2782,374L2818,374L2818,346ZM2826,370L2826,366L2822,366L2822,370L2826,370ZM2778,366L2774,366L2774,370L2778,370L2778,366ZM2796.05,350.297C2795.43,349.917 2794.66,349.901 2794.02,350.254C2793.39,350.608 2793,351.275 2793,352L2793,368C2793,368.725 2793.39,369.392 2794.02,369.746C2794.66,370.099 2795.43,370.083 2796.05,369.703L2809.05,361.703C2809.64,361.339 2810,360.695 2810,360C2810,359.305 2809.64,358.661 2809.05,358.297L2796.05,350.297ZM2797,355.579L2804.18,360C2804.18,360 2797,364.421 2797,364.421L2797,355.579ZM2826,362L2826,358L2822,358L2822,362L2826,362ZM2778,358L2774,358L2774,362L2778,362L2778,358ZM2826,354L2826,350L2822,350L2822,354L2826,354ZM2778,350L2774,350L2774,354L2778,354L2778,350ZM2774,342L2774,346L2778,346L2778,342L2774,342ZM2826,346L2826,342L2822,342L2822,346L2826,346ZM2818,334L2782,334L2782,342L2818,342L2818,334ZM2822,334L2822,338L2826,338L2826,334L2822,334ZM2774,338L2778,338L2778,334L2774,334L2774,338Z" />
                  </g>
                </svg>
              </span>
              <span className="hide-menu">Manager Movie</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <Link
              className="sidebar-link"
              
              aria-expanded="false"
            >
              <span>
                <svg
                  id="Layer"
                  height={24}
                  viewBox="0 0 24 24"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="video-plus"
                    d="m21.9 6.208a1.488 1.488 0 0 0 -1.587.181l-2.563 2.05v-.439a3.383 3.383 0 0 0 -3.75-3.75h-9a3.383 3.383 0 0 0 -3.75 3.75v8a3.383 3.383 0 0 0 3.75 3.75h9a3.383 3.383 0 0 0 3.75-3.75v-.439l2.563 2.05a1.486 1.486 0 0 0 .934.33 1.515 1.515 0 0 0 .653-.149 1.491 1.491 0 0 0 .85-1.353v-8.878a1.491 1.491 0 0 0 -.85-1.353zm-5.65 9.792c0 1.577-.673 2.25-2.25 2.25h-9c-1.577 0-2.25-.673-2.25-2.25v-8c0-1.577.673-2.25 2.25-2.25h9c1.577 0 2.25.673 2.25 2.25zm5 .44-3.5-2.8v-3.28l3.5-2.8zm-8.5-4.44a.75.75 0 0 1 -.75.75h-1.75v1.75a.75.75 0 0 1 -1.5 0v-1.75h-1.75a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 1.5 0v1.75h1.75a.75.75 0 0 1 .75.75z"
                    fill="rgb(0,0,0)"
                  />
                </svg>
              </span>
              <span className="hide-menu">Add Movie</span>
            </Link>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="./ui-card.html"
              aria-expanded="false"
            >
              <span>
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  height={24}
                  strokeLinejoin="round"
                  strokeMiterlimit={2}
                  viewBox="0 0 32 32"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m15.5 2.182c-3.863 0-7 3.137-7 7 0 3.864 3.137 7 7 7s7-3.136 7-7c0-3.863-3.137-7-7-7zm0 2c2.76 0 5 2.241 5 5 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.759 2.24-5 5-5z" />
                  <circle cx="28.821" cy="24.182" r={1} />
                  <circle cx="28.821" cy="29.182" r={1} />
                  <circle cx="28.821" cy="19.182" r={1} />
                  <path d="m20.306 20.182h5.91c.552 0 1-.448 1-1s-.448-1-1-1h-5.91c-.552 0-1 .448-1 1s.448 1 1 1z" />
                  <path d="m20.306 25.182h5.91c.552 0 1-.448 1-1s-.448-1-1-1h-5.91c-.552 0-1 .448-1 1s.448 1 1 1z" />
                  <path d="m20.306 30.182h5.91c.552 0 1-.448 1-1s-.448-1-1-1h-5.91c-.552 0-1 .448-1 1s.448 1 1 1z" />
                  <path d="m3.722 28.091h12.278c.552 0 1 .448 1 1s-.448 1-1 1h-13.278c-.552 0-1-.447-1-1 0 0 0-.824 0-2 0-4.97 4.029-9 9-9h5.278c.552 0 1 .448 1 1s-.448 1-1 1h-5.278c-3.866 0-7 3.134-7 7z" />
                </svg>
              </span>
              <span className="hide-menu">Manager Users</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="./ui-card.html"
              aria-expanded="false"
            >
              <span>
                <svg
                  height={24}
                  viewBox="0 0 32 32"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m28 22.5h-3.5v-3.5a1 1 0 0 0 -2 0v3.5h-3.5a1 1 0 0 0 0 2h3.5v3.5a1 1 0 0 0 2 0v-3.5h3.5a1 1 0 0 0 0-2z" />
                  <path d="m16 29h-10a1 1 0 0 1 -1-1 11.013 11.013 0 0 1 11-11 8.025 8.025 0 1 0 -4.289-1.258 13.012 13.012 0 0 0 -8.711 12.258 3 3 0 0 0 3 3h10a1 1 0 0 0 0-2zm-6-20a6 6 0 1 1 6 6 6.006 6.006 0 0 1 -6-6z" />
                </svg>
              </span>
              <span className="hide-menu">Add Users</span>
            </a>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">AUTH</span>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="./authentication-login.html"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">Login</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="./authentication-register.html"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Register</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* End Sidebar navigation */}
    </div>
  );
};

export default SiderBarAdmin;
