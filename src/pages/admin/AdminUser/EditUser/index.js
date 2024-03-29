import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser, getCommentUser } from "../../../../servers/api";
import AdminLayout from "../../../../layouts/AdminLayout";
import "../../admin.scss";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();
  const token = localStorage.getItem("token"); // Assuming token is in authReducer
  const pathname = window.location;
  const id = pathname.pathname.split("/").pop();
  const [tabData, setTabData] = useState({});

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  ///get user//////////
  const fetchDataGetUser = async () => {
    try {
      const data = await getUser(id, token);
      return data.user;
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };
  ///////////////end ///////////
  // getComments/////////////////
  const fetchDataGetComments = async () => {
    try {
      const data = await getCommentUser(id, token);
      console.table(data)
      return data.comments[0];

    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };
  // end getComments/////////////////

  const fetchDataForTab = async (tabName) => {
    try {
      let data;
      switch (tabName) {
        case 1:
          data = await fetchDataGetUser();
          break;
        case 2:
          data = await fetchDataGetComments();
          break;
        default:
          data = {};
          break;
      }
      setTabData(data);

      console.log(data);
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };
  useEffect(() => {
    fetchDataForTab(toggleState);
  }, [toggleState]);

  return (
    <AdminLayout>
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            {/* main title */}
            <div className="col-12">
              <div className="main__title">
                <h2>Edit user</h2>
              </div>
            </div>
            {/* end main title */}
            {/* profile */}
            <div className="col-12">
              <div className="profile__content">
                {/* profile user */}
                <div className="profile__user">
                  <div className="profile__avatar">
                    <img src="img/user.svg" alt />
                  </div>
                  {/* or red */}
                  <div className="profile__meta profile__meta--green">
                    <h3>
                      Username <span>(Approved)</span>
                    </h3>
                    <span>ID: </span>
                  </div>
                </div>
                {/* end profile user */}
                {/* profile tabs nav */}
                <ul
                  className="nav nav-tabs profile__tabs"
                  id="profile__tabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <div
                      className={
                        toggleState === 1 ? "nav-link active" : "nav-link"
                      }
                      onClick={() => toggleTab(1)}
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      Profile
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      onClick={() => toggleTab(2)}
                      className={
                        toggleState === 2 ? "nav-link active" : "nav-link"
                      }
                      data-toggle="tab"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      Comments
                    </div>
                  </li>
                </ul>
                {/* end profile tabs nav */}
                {/* profile mobile tabs nav */}

                {/* end profile mobile tabs nav */}
                {/* profile btns */}
                <div className="profile__actions">
                  <a
                    href="#modal-status3"
                    className="profile__action profile__action--banned open-modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12,13a1.49,1.49,0,0,0-1,2.61V17a1,1,0,0,0,2,0V15.61A1.49,1.49,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z" />
                    </svg>
                  </a>
                  <a
                    href="#modal-delete3"
                    className="profile__action profile__action--delete open-modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                    </svg>
                  </a>
                </div>
                {/* end profile btns */}
              </div>
            </div>
            {/* end profile */}
            {/* content tabs */}
            <div className="tab-content" id="myTabContent">
              <div
                className={
                  toggleState === 1
                    ? "tab-pane fade active show"
                    : "tab-pane fade"
                }
                id="tab-1"
                role="tabpanel"
                aria-labelledby="1-tab"
              >
                <div className="col-12">
                  <div className="sign__wrap">
                    <div className="row">
                      {/* details form */}
                      <div className="col-12 col-lg-6">
                        <form
                          action="#"
                          className="sign__form sign__form--profile sign__form--first"
                        >
                          <div className="row">
                            <div className="col-12">
                              <h4 className="sign__title">Profile details</h4>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label
                                  className="sign__label"
                                  htmlFor="username"
                                >
                                  Login
                                </label>
                                <input
                                  id="username"
                                  type="text"
                                  name="username"
                                  value={tabData.username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  className="sign__input"
                                  placeholder="UserName"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="email">
                                  Email
                                </label>
                                <input
                                  id="email"
                                  type="text"
                                  name="email"
                                  value={tabData.username}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="sign__input"
                                  placeholder="email@email.com"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label
                                  className="sign__label"
                                  htmlFor="firstname"
                                >
                                  User name
                                </label>
                                <input
                                  id="firstname"
                                  type="text"
                                  value={tabData.password}
                                  onChange={(e) => setUsername(e.target.value)}
                                  name="firstname"
                                  className="sign__input"
                                  placeholder="John"
                                />
                              </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="rights">
                                  Rights
                                </label>
                                <select
                                  className="js-example-basic-single"
                                  id="rights"
                                  value={tabData.role}
                                  onChange={(e) => setRole(e.target.value)}
                                >
                                  <option value="User">User</option>
                                  <option value="Admin">Admin</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <button className="sign__btn" type="button">
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* end details form */}
                      {/* password form */}
                      <div className="col-12 col-lg-6">
                        <form
                          action="#"
                          className="sign__form sign__form--profile"
                        >
                          <div className="row">
                            <div className="col-12">
                              <h4 className="sign__title">Change password</h4>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label
                                  className="sign__label"
                                  htmlFor="oldpass"
                                >
                                  Old password
                                </label>
                                <input
                                  id="oldpass"
                                  type="password"
                                  name="oldpass"
                                  className="sign__input"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label
                                  className="sign__label"
                                  htmlFor="newpass"
                                >
                                  New password
                                </label>
                                <input
                                  id="newpass"
                                  type="password"
                                  name="newpass"
                                  className="sign__input"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label
                                  className="sign__label"
                                  htmlFor="confirmpass"
                                >
                                  Confirm new password
                                </label>
                                <input
                                  id="confirmpass"
                                  type="password"
                                  name="confirmpass"
                                  className="sign__input"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <button className="sign__btn" type="button">
                                Change
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* end password form */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  toggleState === 2
                    ? "tab-pane fade active show"
                    : "tab-pane fade"
                }
                id="tab-2"
                role="tabpanel"
                aria-labelledby="2-tab"
              >
                {/* table */}
                <div className="col-12">
                  <div className="main__table-wrap">
                    <table className="main__table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>ITEM</th>
                          <th>TEXT</th>
                          <th>CRAETED DATE</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="main__table-text">
                              {tabData._id}
                            </div>
                          </td>

                          <td>
                            <div className="main__table-text">John Doe</div>
                          </td>
                          <td>
                            <div className="main__table-text">
                              {tabData.content}
                            </div>
                          </td>

                          <td>
                            <div className="main__table-text">
                              {tabData.createdAt}
                            </div>
                          </td>
                          <td>
                            <div className="main__table-btns">
                              <a
                                href="#modal-delete"
                                className="main__table-btn main__table-btn--delete open-modal"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* end table */}
                {/* paginator */}
                <div className="col-12">
                  <div className="paginator">
                    <span className="paginator__pages">10 from 38</span>
                    <ul className="paginator__paginator">
                      <li>
                        <a href="#">
                          <svg
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.75 5.36475L13.1992 5.36475"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.771 10.1271L0.749878 5.36496L5.771 0.602051"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            width={14}
                            height={11}
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1992 5.3645L0.75 5.3645"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.17822 0.602051L13.1993 5.36417L8.17822 10.1271"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end paginator */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </AdminLayout>
  );
};

export default EditUser;
