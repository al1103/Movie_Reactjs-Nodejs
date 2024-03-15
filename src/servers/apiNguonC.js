import axios from "axios";
const API_KEY = "https://phim.nguonc.com/api";
const axiosClient = axios.create({ baseURL: API_KEY });

const getOneFilmNguonC = async (slug) => {
    try {
      const { data } = await axiosClient({
        method: "get",
        url: `/film/${slug}`,
       
      });
      return data;
    } catch (error) {
      return error.message;
    }
  };

  
  const getListMovies = async (page) => {
    try {
      const {data} = await axiosClient({
        method: "get",
        url: "/films/phim-moi-cap-nhat?page=" + page,
        headers: {
          "Content-Type": "application/json",
        }
      });
      return data;
    } catch (error) {
      return error.message;
    }
  };
  export { getOneFilmNguonC,getListMovies};