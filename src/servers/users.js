import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const axiosClient = axios.create({ baseURL: API_KEY });
const getUserLogin = async ({ email: username, password }) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        password,
      },
    });
    return data.data; // Trả về phản hồi từ axiosClient
  } catch (error) {
    return error.message;
  }
};

// đăng kí tài khoản với username và password

const register = async ({ email:username, password }) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        password,
      },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
};

export { getUserLogin, register };
