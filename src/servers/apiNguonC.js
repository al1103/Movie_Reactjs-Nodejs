import axios from "axios";
const API_KEY = "https://phim.nguonc.com/api/film";
const axiosClient = axios.create({ baseURL: API_KEY });

const getOneFilmNguonC = async (slug) => {
    try {
      const { data } = await axiosClient({
        method: "get",
        url: `/${slug}`,
       
      });
      return data;
    } catch (error) {
      return error.message;
    }
  };

  export { getOneFilmNguonC };