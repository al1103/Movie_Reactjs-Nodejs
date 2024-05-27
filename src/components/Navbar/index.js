import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, getFav, toggleTheme } from "../../action";
import Switch from "antd/lib/switch";
import logo from "./LOGO.png";
import { getFavorite, DeleteFavorite } from "../../servers/users";
import { Button, Popover } from "antd";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);
  const navOpenBtnRef = useRef(null);

  const [fav, setFav] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [checkToken, setCheckToken] = useState(
    localStorage.getItem("token") ? true : false
  );

  const currentTheme = useSelector((state) => state.Movie.mode);

  const checked = currentTheme === "dark";
  const hide = () => {
    setClicked(false);
  };

  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme(currentTheme === "light" ? "dark" : "light"));
  }, [dispatch, currentTheme]);

  const handleClickChange = (open) => {
    setClicked(open);
  };

  const handleDropdown = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location.href = "/";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const GetFav = async () => {
      try {
        if (token) {
          try {
            const res = await getFavorite(token);
            if (res.status == "success") {
              setFav(res.data);
              dispatch({ type: "getFav", payload: res });
            } else {
              setFav([]);
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          const storedFav = JSON.parse(localStorage.getItem("favorite")) || [];
          setFav(storedFav);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    GetFav();
  }, [clicked]);

  const handleDeleteFavorite = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await DeleteFavorite(id, token);
      if (res) {
        setFav(fav.filter((x) => x._id !== id));
        dispatch(getFav(fav.filter((x) => x.id !== id)));
      }
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  };
  const clickContent = (
    <div className="favContent">
      {checkToken ? (
        <>
          {fav.length > 0 ? (
            fav.map((item) => (
              <div key={item._id} className="d-flex p-2 align-items-center">
                <img
                  src={item.thumb_url}
                  alt={item.name}
                  width={30}
                  className="mr-2"
                />
                <h6 className="px-4 nameMovie flex-grow-1">{item.name}</h6>

                <button
                  type="button"
                  className="close ml-auto"
                  aria-label="Close"
                  onClick={() => handleDeleteFavorite(item._id)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <h6 className="text-center">
                You don't have any favorite movies yet.
              </h6>
            </div>
          )}
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <h6 className="text-center">
            Please login to see your favorite movies
          </h6>
        </div>
      )}
    </div>
  );

  const handleNavClick = (event) => {
    navbarRef.current.classList.toggle("active");
    overlayRef.current.classList.toggle("active");
    document.body.classList.toggle("active");
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
                      <Link
                        to="/user"
                        className="d-flex align-items-center gap-2 dropdown-item"
                      >
                        <i className="ti ti-user fs-6" />
                        <p className="mb-0 fs-3">My Profile</p>
                      </Link>

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
            <Switch checked={checked} onChange={handleToggleTheme} />
             
            </li>
            <li>
              <Popover
                content={
                  <div>
                    {clickContent}
                    <a onClick={hide} className="btn btn-danger mt-4 l-5">
                      Close
                    </a>
                  </div>
                }
                trigger="click"
                open={clicked}
                onOpenChange={handleClickChange}
              >
                <Button className="btn btn-outline-primary">Favorite</Button>
              </Popover>
            </li>
          </ul>
        </nav>
        <button
          className="menu-open-btn"
          onClick={handleNavClick}
          ref={navOpenBtnRef}
        >
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
