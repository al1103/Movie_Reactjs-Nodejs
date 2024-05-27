import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const axiosClient = axios.create({ baseURL: API_KEY });
const getListMovies = async (page = 1, token) => {
  try {
    const requestOptions = {
      method: "get",
      url: "/auth/movies",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Requested-With": "XMLHttpRequest",
      },
    };

    if (page !== null && page !== undefined) {
      requestOptions.url = "/auth/movies?page=" + page;
    }

    const { data } = await axiosClient(requestOptions);
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
      url: "/auth/movies",
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
const deleteMovie = async (id, token) => {
  try {
    const { data } = await axiosClient({
      method: "delete",
      url: `/auth/movies/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data; // Returning data if needed
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
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
};

const updateFilm = async (movie, token) => {
  try {
    const { data } = await axiosClient({
      method: "put",
      data: movie,
      url: `/auth/movies/${movie._id}`,
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
        ? "/auth/users"
        : "/auth/users?page=" + page;
    const { data } = await axiosClient({
      method: "get",
      url,
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

const getUser = async (id, token) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/synthetic/users/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    return error.message;
  }
};
const getCommentUser = async (id, token) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/auth/comments/${id}`,
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

const postComment = async (comment, PostID, token) => {
  try {
    const req = await axiosClient({
      method: "post",
      data: { comment },
      url: `users/${PostID}/comment`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
      url: `comments/${PostID}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
      url: "/latestMovies?limit=" + limit,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return req.data;
  } catch (error) {
    return error.message;
  }
};

const SearchMovie = async (name,category="") => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/search?name=${name}&category=${category}`,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
const latestMovies = async () => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/latestMovies",
    });
    return data;
  } catch (error) {
    return error.message;
  }
}

const FilterMovie = async (category, limit) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/filter?category=${category}&limit=${limit}`,
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
        Authorization: `Bearer ${token}`,
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
const ResetPassword = async (token, password) => {
  try {
    const data = await axiosClient({
      method: "post",
      url: "/synthetic/resetPassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        token,
        password,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export {
  SearchMovie,
  getListMovies,
  ResetPassword,
  addMovie,
  deleteComment,
  forgetPassword,
  getOneFilm,
  updateFilm,
  getListUsers,
  deleteMovie,
  getUser,
  postComment,
  getMovieAPI,
  getComments,
  getCommentUser,
  FilterMovie,
  latestMovies
};
