import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const axiosClient = axios.create({ baseURL: API_KEY });
const getListMovies = async (page, token) => {
  try {
    const {data} = await axiosClient({
      method: "get",
      url: "/auth/getListMovies?page=" + page,
      headers: {
        'Authorization': 'Bearer ' + token,
        'X-Requested-With': 'XMLHttpRequest'
      }
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
        'Authorization': 'Bearer ' + token,
      },
    });
    return data;
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
const getOneFilm = async (slug) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: `/auth/${slug}`,
      headers: {
        "Content-Type": "application/json",
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
        'Authorization': `Bearer ${token}`
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
const getListUsers = async (page,token) => {
  try {
    const { data } = await axiosClient({
      method: "get",
      url: "/auth/users?page=" + page,
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + token,
      
      }
    })
  }
  catch (error) {
    return error.message;
  }
}

export { getListMovies, addMovie, getOneFilm, editMovie ,updateFilm,getListUsers};
