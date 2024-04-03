import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const axiosClient = axios.create({ baseURL: API_KEY });
const getUserLogin = async ({ email, password }) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    });
    return data.data; // Trả về phản hồi từ axiosClient
  } catch (error) {
    return error.message;
  }
};

// đăng kí tài khoản với username và password

const register = async ({ username, email, password }) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username,
        email,
        password,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};
const updateUser = async (id, token, dataUser) => {
  try {
    const data = await axiosClient({
      method: "put",
      url: "/users/update/" + id,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: {
        dataUser,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};
const changePassword = async ({ email, password, newPassword }) => {
  try {
    const data = await axiosClient({
      method: "put",
      url: "/synthetic/changePassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
        newPassword,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
export { getUserLogin, register, updateUser, changePassword };
