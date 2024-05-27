import React, { useEffect, useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import "./css/ewave-member.css";
import "./css/ewave-plugins.css";
import "./css/ewave-style.css";
import "./css/ewave-ui.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { getUser } from "../../servers/api";
import { updateUser } from "../../servers/users";
import Loading from "../../components/Loading";
const Info = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = localStorage.getItem("token");
  const id = user._id;
  const [name, setName] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(id, token);
        setUser(response);

        console.log(response);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const SubmitUpdateUser = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert(
        "Mật khẩu mới không khớp (New password doesn't match confirm password)"
      );
      return;
    }

    const dataUser = {
      avatar,
      name,
      email,
    };

    if (newPassword) {
      dataUser.password = password;
      dataUser.newPassword = newPassword;
    }

    try {
      const response = await updateUser(id, token, dataUser);
      console.log(response);
      if (response.status === "success") {
        toast.success("Cập nhật thành công (Update successfully)");
      } else {
        toast.error("Cập nhật thất bại (Update failed)");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result;
        resolve(base64String);
      };

      reader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.size > 80 * 1024) {
      alert("The file size must be less than 80kB");
      event.target.value = null; // Clear the file input
    } else {
      const base64 = await fileToBase64(file);
      setAvatar(base64);
    }
  };

  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <UserLayout>
      <div className="member-right">
        <h2 className="member-title">My Information</h2>
        <div className="member-tab-list">
          <ul className="clearfix">
            <li>
              <Link to="/user">Basic Information</Link>
            </li>
            <li className="active">Edit Information</li>
          </ul>
        </div>
        <div className="member-listcon">
          <form
            className="form-horizontal center-block ewave-form"
            method="post"
            data-jump="refresh-wait"
          >
            <div className="form-group">
              <label htmlFor="img" className="col-xs-2 col-sm-2 control-label">
                Profile Picture
              </label>
              <div className="col-xs-10 col-sm-10">
                <div className="col-xs-10 col-sm-10">
                  <input
                    type="file"
                    id="img"
                    accept="image/*" // Only accept image files
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 col-sm-2 control-label">
                Username
              </label>
              <div className="col-xs-10 col-sm-10 layer-col-12">
                <p className="form-control-static pt-xs-0">
                  <strong>{name}</strong>
                </p>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">Email</label>
              <div className="col-sm-8">
                <div className="input-group">
                  <input
                    type="text"
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    name="user_email"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label">Old Password</label>
              <div className="col-sm-8 layer-col-12">
                <input
                  type="password"
                  className="form-control"
                  name="user_pwd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your current password"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">New Password</label>
              <div className="col-sm-8 layer-col-12">
                <input
                  type="password"
                  className="form-control empty-allowed"
                  name="user_pwd1"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Leave blank if you do not want to change"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">
                Confirm New Password
              </label>
              <div className="col-sm-8 layer-col-12">
                <input
                  type="password"
                  className="form-control empty-allowed"
                  name="user_pwd2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Leave blank if you do not want to change"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" />
              <div className="col-sm-8">
                <button
                  onClick={SubmitUpdateUser}
                  type="submit"
                  className="btn member-btn btn-block btn-theme ewave-submit"
                >
                  Submit Changes
                </button>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" />
              <div className="col-sm-8">
                <p className="form-control-static text-center">
                  <a href="#">
                    <i className="fa fa-lock" />
                    &nbsp;Forgot Password
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </UserLayout>
  );
};

export default Info;
