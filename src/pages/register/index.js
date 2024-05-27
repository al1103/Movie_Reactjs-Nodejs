import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../servers/users";
import  "./Style.module.scss"
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(18);
  const iconEyeRef = useRef(null); // Use useRef
  const iconEyeSlashRef = useRef(null);
  const passwordInputRef = useRef(null);

  const togglePasswordVisibility = () => {
    const passwordInput = passwordInputRef.current;
    const iconEye = iconEyeRef.current;
    const iconEyeSlash = iconEyeSlashRef.current;

    if (passwordInput && iconEye && iconEyeSlash) {
      // Check if elements exist
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconEye.style.display = "none";
        iconEyeSlash.style.display = "block";
      } else {
        passwordInput.type = "password";
        iconEye.style.display = "block";
        iconEyeSlash.style.display = "none";
      }
    }
  };

  const Navigator = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register({ username, email, password, age }); // Assume `register` returns a Promise

      if (response.status === "success") {
        notify("Đăng ký thành công");
        localStorage.setItem("user", JSON.stringify(response.data));
        Navigator("/");
      } else {
        notify(response.response.data.error);
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
                    <p className="text-center">Zilong</p>
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
                        <div className="inputPassword">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="Password1"
                            ref={passwordInputRef}
                          />
                          <div
                            className="toggleShowPassword"
                            onClick={togglePasswordVisibility}
                          >
                            <span
                              className="icon-eye"
                              id="icon_eye"
                              ref={iconEyeRef}
                            >
                              <svg
                                version="1.1"
                                width={20}
                                fill="#ffff"
                                height={20}
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 511.999 511.999"
                                xmlSpace="preserve"
                              >
                                <g>
                                  <g>
                                    <path
                                      d="M508.745,246.041c-4.574-6.257-113.557-153.206-252.748-153.206S7.818,239.784,3.249,246.035
			c-4.332,5.936-4.332,13.987,0,19.923c4.569,6.257,113.557,153.206,252.748,153.206s248.174-146.95,252.748-153.201
			C513.083,260.028,513.083,251.971,508.745,246.041z M255.997,385.406c-102.529,0-191.33-97.533-217.617-129.418
			c26.253-31.913,114.868-129.395,217.617-129.395c102.524,0,191.319,97.516,217.617,129.418
			C447.361,287.923,358.746,385.406,255.997,385.406z"
                                    />
                                  </g>
                                </g>
                                <g>
                                  <g>
                                    <path
                                      d="M255.997,154.725c-55.842,0-101.275,45.433-101.275,101.275s45.433,101.275,101.275,101.275
			s101.275-45.433,101.275-101.275S311.839,154.725,255.997,154.725z M255.997,323.516c-37.23,0-67.516-30.287-67.516-67.516
			s30.287-67.516,67.516-67.516s67.516,30.287,67.516,67.516S293.227,323.516,255.997,323.516z"
                                    />
                                  </g>
                                </g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                                <g></g>
                              </svg>
                            </span>
                            <span
                              className="icon-eye-slash"
                              id="icon_eye_slash"
                              ref={iconEyeSlashRef}
                            >
                              <svg
                                id="Icons"
                                enableBackground="new 0 0 128 128"
                                height={20}
                                width={20}
                                viewBox="0 0 128 128"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Hide"
                                  d="m79.891 65.078 7.27-7.27c.529 1.979.839 4.048.839 6.192 0 13.234-10.766 24-24 24-2.144 0-4.213-.31-6.192-.839l7.27-7.27c7.949-.542 14.271-6.864 14.813-14.813zm47.605-3.021c-.492-.885-7.47-13.112-21.11-23.474l-5.821 5.821c9.946 7.313 16.248 15.842 18.729 19.602-4.741 7.219-23.339 31.994-55.294 31.994-4.792 0-9.248-.613-13.441-1.591l-6.573 6.573c6.043 1.853 12.685 3.018 20.014 3.018 41.873 0 62.633-36.504 63.496-38.057.672-1.209.672-2.677 0-3.886zm-16.668-39.229-88 88c-.781.781-1.805 1.172-2.828 1.172s-2.047-.391-2.828-1.172c-1.563-1.563-1.563-4.094 0-5.656l11.196-11.196c-18.1-10.927-27.297-27.012-27.864-28.033-.672-1.209-.672-2.678 0-3.887.863-1.552 21.623-38.056 63.496-38.056 10.827 0 20.205 2.47 28.222 6.122l12.95-12.95c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656zm-76.495 65.183 10.127-10.127c-2.797-3.924-4.46-8.709-4.46-13.884 0-13.234 10.766-24 24-24 5.175 0 9.96 1.663 13.884 4.459l8.189-8.189c-6.47-2.591-13.822-4.27-22.073-4.27-31.955 0-50.553 24.775-55.293 31.994 3.01 4.562 11.662 16.11 25.626 24.017zm15.934-15.935 21.809-21.809c-2.379-1.405-5.118-2.267-8.076-2.267-8.822 0-16 7.178-16 16 0 2.958.862 5.697 2.267 8.076z"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Age
                        </label>
                        <input
                          onChange={(e) => setAge(e.target.value)}
                          type="number"
                          min={13}
                          max={120}
                          defaultValue={13}
                          className="form-control"
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
                        <Link className="text-primary fw-bold ms-2" to="/login">
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
