import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../servers/users";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigator = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register({username, email, password }); // Assume `register` returns a Promise

      if (response.status === "success") {
        notify("Đăng ký thành công");
        localStorage.setItem("user", JSON.stringify(response.data));
        Navigator("/"); // Use directly without setTimeout
      } else {
        notify(response.response.data.error);
        console.log(response.response.data.error)
      }
    } catch (error) {
      console.error(error);
      notify(error);
    }
  };

  const notify = (message) => toast(message);

  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-md-8 col-lg-6 col-xxl-3">
                <div className="card mb-0">
                  <div className="card-body login-card-body">
                    <a
                      href="./index.html"
                      className="text-nowrap logo-img text-center d-block py-3 w-100"
                    >
                      <img
                        src="../assets/images/logos/dark-logo.svg"
                        width={180}
                        alt
                      />
                    </a>
                    <p className="text-center">Your Social Campaigns</p>
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputtext1"
                          className="form-label"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputtext1"
                          aria-describedby="textHelp"
                          onChange={(e) => setUsername(e.target.value)}

                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2"
                      >
                        Sign Up
                      </button>
                      <div className="d-flex align-items-center justify-content-center">
                        <p className="fs-4 mb-0 fw-bold">
                          Already have an Account?
                        </p>
                        <Link
                          className="text-primary fw-bold ms-2"
                          to="/login"
                        >
                          Sign In
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default LoginPage;
