import React, { useEffect, useState , useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { navItems } from "../../datas/index";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const headerRef = useRef(null);

  
// const navOpenBtn = document.querySelector("[data-menu-open-btn]");
// const navCloseBtn = document.querySelector("[data-menu-close-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const overlay = document.querySelector("[data-overlay]");

// const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// for (let i = 0; i < navElemArr.length; i++) {

//   navElemArr[i].addEventListener("click", function () {

//     navbar.classList.toggle("active");
//     overlay.classList.toggle("active");
//     document.body.classList.toggle("active");

//   });

// }



// /**
//  * header sticky
//  */


useEffect(() => {
  const header = headerRef.current; // Access the element here
  window.addEventListener("scroll", function () {
 
   window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
  });
}, []); 


  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="overlay" data-overlay />
        <a href="./index.html" className="logo">
          <img src="./assets/images/logo.svg" alt="Filmlane logo" />
        </a>
        <div className="header-actions">
          <button className="search-btn">
            <ion-icon name="search-outline" />
          </button>
          <div className="lang-wrapper">
            <label htmlFor="language">
              <ion-icon name="globe-outline" />
            </label>
            <select name="language" id="language">
              <option value="en">EN</option>
              <option value="au">AU</option>
              <option value="ar">AR</option>
              <option value="tu">TU</option>
            </select>
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
        <button className="menu-open-btn" data-menu-open-btn>
          <ion-icon name="reorder-two" />
        </button>
        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="./index.html" className="logo">
              <img src="./assets/images/logo.svg" alt="Filmlane logo" />
            </a>
            <button className="menu-close-btn" data-menu-close-btn>
              <ion-icon name="close-outline" />
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              <a href="./index.html" className="navbar-link">
                Home
              </a>
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
          </ul>
          <ul className="navbar-social-list">
            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-pinterest" />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-youtube" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
