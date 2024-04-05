import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navItems } from "../../datas/index";
import { logout } from "../../action";
import { HomeRouter } from "../../routers/index";
import logo from "./LOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);
  const navOpenBtnRef = useRef(null);
  const navCloseBtnRef = useRef(null); 
  


    const handleNavClick = (event) => {
      navbarRef.current.classList.toggle('active');
      overlayRef.current.classList.toggle('active');
      document.body.classList.toggle('active');
    };


  useEffect(() => {
    const header = headerRef.current; // Access the element here
    window.addEventListener("scroll", function () {
      window.scrollY >= 10
        ? header.classList.add("active")
        : header.classList.remove("active");
    });
  }, []);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    setToken(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="overlay" ref={overlayRef} onClick={handleNavClick} />
        <Link to="/" className="logo">
          <img src={logo} alt="zilong" />
        </Link>
        <div className="header-actions">
          <button className="search-btn">
            <ion-icon name="search-outline" />
          </button>
          <div className="lang-wrapper">
            <label htmlFor="language">
              <ion-icon name="globe-outline" />
            </label>
            <div className="Search">
              <Link to="/Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={24}
                  height={24}
                >
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d="M338.29 338.29L448 448"
                  />
                </svg>
              </Link>
            </div>
          </div>
          {token ? (
            <button
              className="btn btn-primary"
              aria-label="Logout user"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Sign in
            </Link>
          )}
        </div>

        <nav className="navbar" ref={navbarRef}>
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Movie
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Tv Show
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Web Series
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Pricing
              </a>
            </li>
            <li>
              <Link to="Search" className="navbar-link">
                Search
              </Link>
            </li>
          </ul>
        </nav>
        <button className="menu-open-btn" onClick={handleNavClick } ref={navOpenBtnRef} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={24}
            height={24}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M80 160h352M80 256h352M80 352h352"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
