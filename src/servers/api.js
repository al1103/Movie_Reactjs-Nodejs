import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const axiosClient = axios.create({ baseURL: API_KEY });
const getListMovies = async (page, token) => {
  try {
    if (page === null || page === undefined) {
      const { data } = await axiosClient({
        method: "get",
        url: "/auth/getListMovies",
        headers: {
          Authorization: "Bearer " + token,
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      return data;
    } else {
      const { data } = await axiosClient({
        method: "get",
        url: "/auth/getListMovies?page=" + page,
        headers: {
          Authorization: "Bearer " + token,
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      return data;
    }
  } catch (error) {
    return error.message;
  }
};

const addMovie = async (movie, token) => {
  try {
    const { data } = await axiosClient({
      method: "post",
      data: movie,
      url: "/auth/addMovie",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
const deleteMovie = async (id, token) => {
  try {
    const { data } = await axiosClient({
      method: "delete",
      url: `/auth/deletemovie/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data; // Returning data if needed
  } catch (error) {
    return error.message;
  }
};

const editMovie = async (movie) => {
  try {
    const { data } = await axiosClient({
      method: "put",
      data: movie,
      url: "/auth/editMovie",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
const getOneFilm = async (slug, token) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/${slug}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const updateFilm = async (movie, token) => {
  try {
    const { data } = await axiosClient({
      method: "put",
      data: movie,
      url: `/auth/edit/${movie.slug}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
const getListUsers = async (page, token) => {
  try {
    const url =
      page === null || page === undefined
        ? "/auth/getListUser"
        : "/auth/getListUser?page=" + page;
    const { data } = await axiosClient({
      method: "get",
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const getUser = async (id, token) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/auth/users/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
const getCommentUser = async (id, token) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/auth/getCommentUser/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

const postComment = async (comment, PostID, token) => {
  try {
    const req = await axiosClient({
      method: "post",
      data: { comment },
      url: `users/${PostID}/comment`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return req;
  } catch (error) {
    return error.message;
  }
};
const getComments = async (PostID, token) => {
  try {
    const req = await axiosClient({
      method: "get",
      url: `/${PostID}/comments`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return req;
  } catch (error) {
    return error.message;
  }
};
const getMovieAPI = async (limit) => {
  try {
    const req = await axiosClient({
      method: "get",
      url: "/getMovies?limit=" + limit,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return req.data;
  } catch (error) {
    return error.message;
  }
};

const SearchMovie = async (name) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/search?name=${name}`,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
const deleteComment = async (id, token) => {
  try {
    const { data } = await axiosClient({
      method: "delete",
      url: `/users/comment/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
const forgetPassword = async (email) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/synthetic/forgotPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
const ResetPassword = async (token,password) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/synthetic/resetPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        token,
        password
      },
    });
    return data;
  } catch (error) {
    return error;
  }
}

export {
  SearchMovie,
  getListMovies,
  ResetPassword,
  addMovie,
  deleteComment,
  forgetPassword,
  getOneFilm,
  editMovie,
  updateFilm,
  getListUsers,
  deleteMovie,
  getUser,
  postComment,
  getMovieAPI,
  getComments,
  getCommentUser,
};
