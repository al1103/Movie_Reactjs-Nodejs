import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ResetPassword as resetPassword } from "../../servers/api";
import "./login.scss";
import Password from "antd/es/input/Password";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    setToken(token);  
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await resetPassword(token,password);
    if (data.status === 200) {
      toast.success("Password reset successfully");
    } else {
      toast.error("Invalid password");
    }
    setPassword("");
  };

  return (
    <div>
      <div
        className="page-wrapper"
        id="main-wrapper"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <div className="card mb-0">
                  <div className="card-body login-card-body">
                  
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          New Password
                        </label>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    
                      <input
                        type="submit"
                        className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                        value="Reset Password"
                      ></input>
                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
