import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getUser,
  getCommentUser,
  deleteComment,
} from "../../../../servers/api";
import { changePassword, updateUser } from "../../../../servers/users";
import AdminLayout from "../../../../layouts/AdminLayout";
import Pagination from "../../../../components/pagination";
import "../../admin.scss";

const convertDate = (dateString) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1; // Month index starts from 0, so add 1
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

const EditUser = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [tabData, setTabData] = useState([]);
  const [toggleState, setToggleState] = useState(1);

  const token = localStorage.getItem("token");
  const id = window.location.pathname.split("/").pop();

  const toggleTab = (index) => setToggleState(index);

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Password and confirm password do not match");
      return;
    }
    try {
      const data = await changePassword({ email, password, newPassword });
      if (data.status === "success") {
        toast.success("Password changed successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error changing password");
    }
  };

  const fetchDataGetUser = async () => {
    try {
      const data = await getUser(id, token);
      setUsername(data.username);
      setEmail(data.email);
      setRole(data.role);
      setAge(data.age);
    } catch (error) {
      toast.error("Error fetching user data");
    }
  };

  const fetchDataGetComments = async () => {
    try {
      const data = await getCommentUser(id, token);
      setTabData(data.data);
    } catch (error) {
      toast.error("Error fetching comments");
    }
  };

  const fetchDataForTab = async (tabIndex) => {
    if (tabIndex === 1) {
      await fetchDataGetUser();
    } else if (tabIndex === 2) {
      await fetchDataGetComments();
    }
  };

  useEffect(() => {
    fetchDataForTab(toggleState);
  }, [toggleState]);

  const handleDeleteComment = async (commentId) => {
    try {
      const data = await deleteComment(commentId, token);
      if (data.status === "success") {
        toast.success("Comment deleted successfully");
        fetchDataForTab(2);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error deleting comment");
    }
  };

  const handleChangeUser = async () => {
    try {
      const dataUser = { username, email, role, age };
      const data = await updateUser(id, token, dataUser);
      if (data.status === "success") {
        toast.success("User updated successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error updating user");
    }
  };

  return (
    <AdminLayout>
      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="main__title">
                <h2>Edit User</h2>
              </div>
            </div>

            <div className="col-12">
              <div className="profile__content">
                <div className="profile__user">
                  <div className="profile__avatar">
                    <img src="img/user.svg" alt="User Avatar" />
                  </div>
                  <div className="profile__meta profile__meta--green">
                    <h3>
                      Username: <span>{username}</span>
                    </h3>
                    <span>
                      ID: <span>{id}</span>
                    </span>
                  </div>
                </div>

                <ul className="nav nav-tabs profile__tabs" role="tablist">
                  <li className="nav-item">
                    <div
                      className={
                        toggleState === 1 ? "nav-link active" : "nav-link"
                      }
                      onClick={() => toggleTab(1)}
                      role="tab"
                      aria-selected={toggleState === 1}
                    >
                      Profile
                    </div>
                  </li>
                  <li className="nav-item">
                    <div
                      className={
                        toggleState === 2 ? "nav-link active" : "nav-link"
                      }
                      onClick={() => toggleTab(2)}
                      role="tab"
                      aria-selected={toggleState === 2}
                    >
                      Comments
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-content">
              <div
                className={
                  toggleState === 1
                    ? "tab-pane fade active show"
                    : "tab-pane fade"
                }
                role="tabpanel"
              >
                <div className="col-12">
                  <div className="sign__wrap">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <form className="sign__form sign__form--profile">
                          <div className="row">
                            <div className="col-12">
                              <h4 className="sign__title">Profile Details</h4>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label
                                  className="sign__label"
                                  htmlFor="username"
                                >
                                  Username
                                </label>
                                <input
                                  id="username"
                                  type="text"
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                  className="sign__input"
                                  placeholder="Username"
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
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="sign__input"
                                  placeholder="email@example.com"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="age">
                                  Age
                                </label>
                                <input
                                  id="age"
                                  type="text"
                                  value={age}
                                  onChange={(e) => setAge(e.target.value)}
                                  className="sign__input"
                                  placeholder="Age"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label className="sign__label" htmlFor="rights">
                                  Role
                                </label>
                                <select
                                  className="sign__input"
                                  id="rights"
                                  value={role}
                                  onChange={(e) => setRole(e.target.value)}
                                >
                                  <option value="User">User</option>
                                  <option value="Admin">Admin</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12">
                              <button
                                className="sign__btn"
                                type="button"
                                onClick={handleChangeUser}
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="col-12 col-lg-6">
                        <form className="sign__form sign__form--profile">
                          <div className="row">
                            <div className="col-12">
                              <h4 className="sign__title">Change Password</h4>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                              <div className="sign__group">
                                <label
                                  className="sign__label"
                                  htmlFor="oldpass"
                                >
                                  Old Password
                                </label>
                                <input
                                  id="oldpass"
                                  type="password"
                                  onChange={(e) => setPassword(e.target.value)}
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
                                  New Password
                                </label>

                                <input
                                  id="newpass"
                                  onChange={(e) =>
                                    setNewPassword(e.target.value)
                                  }
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
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                  name="confirmpass"
                                  className="sign__input"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <button
                                className="sign__btn"
                                type="button"
                                onClick={handleChangePassword}
                              >
                                Change password
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
                          <th>ACTIONSs</th>
                        </tr>
                      </thead>
                      <tbody>
                        {toggleState === 2 &&
                          tabData.map((tab, index) => (
                            <tr key={index}>
                              {console.log(tab)}
                              <td>
                                <div className="main__table-text">
                                  {tab._id}
                                </div>
                              </td>

                              <td>
                                <div className="main__table-text"></div>
                              </td>
                              <td>
                                <div className="main__table-text">
                                  {tab.content}
                                </div>
                              </td>

                              <td>
                                <div className="main__table-text">
                                  {convertDate(tab.createdAt)}
                                </div>
                              </td>
                              <td>
                                <div className="main__table-btns">
                                  <button
                                    onClick={() => handleDeleteComment(tab._id)}
                                    className="main__table-btn main__table-btn--delete open-modal"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                                    </svg>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* end table */}
                {/* paginator */}
                <div className="col-12">
                  <div className="paginator">
                    <Pagination></Pagination>
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
