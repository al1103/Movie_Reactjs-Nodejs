import React from "react";
import { Link } from "react-router-dom";

const SiderBarAdmin = () => {
  return (
    <aside className="left-sidebar">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link href="./index.html" className="text-nowrap logo-img">
            <img src="../assets/images/logos/dark-logo.svg" width={180} alt />
          </Link>
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
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <Link
                to={"/admin"}
                className="sidebar-link"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  viewBox="0 0 24 24"
                  id="dashboard"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                </svg>
                <span className="hide-menu">Dashboard</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <span className="hide-menu">Movie Manager</span>
            </li>
            <li className="sidebar-item">
              <Link
                to={"/admin/movieManager"}
                className="sidebar-link"
                href="./ui-buttons.html"
                aria-expanded="false"
              >
                <svg
                  version="1.1"
                  id="svg2781"
                  xmlSpace="preserve"
                  width={24}
                  viewBox="0 0 682.66669 682.66669"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs id="defs2785">
                    <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2795">
                      <path d="M 0,512 H 512 V 0 H 0 Z" id="path2793" />
                    </clipPath>
                  </defs>
                  <g
                    id="g2787"
                    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
                  >
                    <g id="g2789">
                      <g id="g2791" clipPath="url(#clipPath2795)">
                        <path
                          d="M 466,15 H 46 v 482 h 420 z"
                          style={{
                            fill: "none",
                            stroke: "#000000",
                            strokeWidth: 30,
                            strokeLinecap: "square",
                            strokeLinejoin: "miter",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          id="path2797"
                        />
                        <g id="g2799" transform="translate(406,15)">
                          <path
                            d="M 0,0 V 482"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2801"
                          />
                        </g>
                        <g id="g2803" transform="translate(466,437)">
                          <path
                            d="M 0,0 H -60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2805"
                          />
                        </g>
                        <g id="g2807" transform="translate(466,376)">
                          <path
                            d="M 0,0 H -345"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2809"
                          />
                        </g>
                        <g id="g2811" transform="translate(466,316)">
                          <path
                            d="M 0,0 H -60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2813"
                          />
                        </g>
                        <g id="g2815" transform="translate(466,256)">
                          <path
                            d="M 0,0 H -60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2817"
                          />
                        </g>
                        <g id="g2819" transform="translate(466,196)">
                          <path
                            d="M 0,0 H -60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2821"
                          />
                        </g>
                        <g id="g2823" transform="translate(466,136)">
                          <path
                            d="M 0,0 H -345"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2825"
                          />
                        </g>
                        <g id="g2827" transform="translate(466,75)">
                          <path
                            d="M 0,0 H -60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2829"
                          />
                        </g>
                        <g id="g2831" transform="translate(106,15)">
                          <path
                            d="M 0,0 V 482"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2833"
                          />
                        </g>
                        <g id="g2835" transform="translate(46,437)">
                          <path
                            d="M 0,0 H 60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2837"
                          />
                        </g>
                        <g id="g2839" transform="translate(46,376)">
                          <path
                            d="M 0,0 H 60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2841"
                          />
                        </g>
                        <g id="g2843" transform="translate(46,316)">
                          <path
                            d="M 0,0 H 60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2845"
                          />
                        </g>
                        <g id="g2847" transform="translate(46,256)">
                          <path
                            d="M 0,0 H 60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2849"
                          />
                        </g>
                        <g id="g2851" transform="translate(46,196)">
                          <path
                            d="M 0,0 H 60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2853"
                          />
                        </g>
                        <g id="g2855" transform="translate(46,136)">
                          <path
                            d="M 0,0 H 60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2857"
                          />
                        </g>
                        <g id="g2859" transform="translate(46,75)">
                          <path
                            d="M 0,0 H 60"
                            style={{
                              fill: "none",
                              stroke: "#000000",
                              strokeWidth: 30,
                              strokeLinecap: "butt",
                              strokeLinejoin: "miter",
                              strokeMiterlimit: 10,
                              strokeDasharray: "none",
                              strokeOpacity: 1,
                            }}
                            id="path2861"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>

                <span className="hide-menu">List Movie</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                to="/admin/addMovie"
                className="sidebar-link"
                aria-expanded="false"
              >
                <svg
                  id="Layer"
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
                <span className="hide-menu">Add Movie</span>
              </Link>
            </li>
            <li className="nav-small-cap">
              <span className="hide-menu">User Manager</span>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                to={"/admin/userManager"}
                aria-expanded="false"
              >
                <svg
                  cliprule="evenodd"
                  fillrule="evenodd"
                  strokelinejoin="round"
                  strokemiterlimit="{2}"
                  viewBox="0 0 32 32"
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m15.5 2.182c-3.863 0-7 3.137-7 7 0 3.864 3.137 7 7 7s7-3.136 7-7c0-3.863-3.137-7-7-7zm0 2c2.76 0 5 2.241 5 5 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.759 2.24-5 5-5z" />
                  <circle cx="28.821" cy="24.182" r="{1}" />
                  <circle cx="28.821" cy="29.182" r="{1}" />
                  <circle cx="28.821" cy="19.182" r="{1}" />
                  <path d="m20.306 20.182h5.91c.552 0 1-.448 1-1s-.448-1-1-1h-5.91c-.552 0-1 .448-1 1s.448 1 1 1z" />
                  <path d="m20.306 25.182h5.91c.552 0 1-.448 1-1s-.448-1-1-1h-5.91c-.552 0-1 .448-1 1s.448 1 1 1z" />
                  <path d="m20.306 30.182h5.91c.552 0 1-.448 1-1s-.448-1-1-1h-5.91c-.552 0-1 .448-1 1s.448 1 1 1z" />
                  <path d="m3.722 28.091h12.278c.552 0 1 .448 1 1s-.448 1-1 1h-13.278c-.552 0-1-.447-1-1 0 0 0-.824 0-2 0-4.97 4.029-9 9-9h5.278c.552 0 1 .448 1 1s-.448 1-1 1h-5.278c-3.866 0-7 3.134-7 7z" />
                </svg>
                <span className="hide-menu">List Users</span>
              </Link>
            </li>

            <li className="sidebar-item"></li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">AUTH</span>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                href="./authentication-login.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-login" />
                </span>
                <span className="hide-menu">Login</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link
                className="sidebar-link"
                href="./authentication-register.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-user-plus" />
                </span>
                <span className="hide-menu">Register</span>
              </Link>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  );
};

export default SiderBarAdmin;
