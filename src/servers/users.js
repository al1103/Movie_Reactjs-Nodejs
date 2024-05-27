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

const register = async ({ username, email, password, age }) => {
  try {
    console.log(username, email, password, age);
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
        age,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};
const updateUser = async (id, token, data) => {
  try {
    const response = await axiosClient({
      method: "put",
      url: `synthetic/users/${id}`, // Use template literal for clarity
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data, // Assuming this is the correct format
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const UpdateService = async (token, data) => {
  try {
    const response = await axiosClient({
      method: "put",
      url: "users/UpdateService",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data,
    });

    return response.data;
  } catch (error) {
    // ... Error handling from above ...
    throw error; // Re-throw for further handling
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
const pointsPay = async (token, data) => {
  try {
    const response = await axiosClient({
      method: "post",
      url: "/Pay/Zalo",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: data, // Corrected data assignment
    });

    // Adapt this based on the API's response structure
    return response.data;
  } catch (error) {
    // ... Error handling from previous examples ...
    throw error; // Re-throw for further handling
  }
};

const AddFavorite = async (movie , token) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/users/AddFavorite",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: 
        movie
      ,
    });
    return data.data;
  } catch (error) {
    return error;
  }
};
const getFavorite = async (token) => {
  try {
    const data = await axiosClient({
      method: "get",
      url: "/users/GetFavorite",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};
const DeleteFavorite = async (id, token) => {
  try {
    const data = await axiosClient({
      method: "delete",
      url: `/users/DeleteFavorite/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};

const ApplyCode = async (token, code) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/users/ApplyCode",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: {
        code,
      },
    });
    return data.data;
  } catch (error) {
    return error;
  }
};
export {
  getUserLogin,
  register,
  updateUser,
  changePassword,
  UpdateService,
  pointsPay,
  ApplyCode,
  DeleteFavorite,
  getFavorite,
  AddFavorite 
};
