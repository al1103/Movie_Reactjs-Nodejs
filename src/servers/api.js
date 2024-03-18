import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const axiosClient = axios.create({ baseURL: API_KEY });
const getListMovies = async (page, token) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/auth/getListMovies?page=" + page,
      headers: {
        Authorization: "Bearer " + token,
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    return data;
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
    const { data } = await axiosClient({
      method: "get",
      url: "/auth/getListUser?page=" + page,
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

const postComment = async (comment,  PostID,token) => {
  try {
    const req = await axiosClient({
      method: "post",
      data: {comment},
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
const getMovieAPI = async (token) => {
  try {
    const req = await axiosClient({
      method: "get",
      url: "/getMovies",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return req.data;
  } catch (error) {
    return error.message;
  }
};

export {
  getListMovies,
  addMovie,
  getOneFilm,
  editMovie,
  updateFilm,
  getListUsers,
  deleteMovie,
  getUser,
  postComment,
  getMovieAPI,
};
