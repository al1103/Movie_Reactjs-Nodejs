import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOneFilm, updateFilm } from "../../../../servers/api";
import { updateMovie } from "../../../../action";
import AdminLayout from "../../../../layouts/AdminLayout";

const EditMovie = () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.Movie.token) // Assuming token is in authReducer

  useEffect(() => {
    const pathname = window.location;
    const slug = pathname.pathname.split("/").pop();

    const fetchData = async () => {
      try {
        const data = await getOneFilm(slug);
        const initialState = {
          id: data.id,
          name: data.name,
          original_name: data.original_name,
          slug: data.slug || "",
          thumb_url: data.thumb_url || "",
          poster_url: data.poster_url || "",
          description: data.description || "",
          category: data.category || "hành động",
        };
        setState(initialState);
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    };

    fetchData();
  }, []);
  const updateData = async (e) => {
    e.preventDefault();

    try {
      const data = await updateFilm(state, token);
      if (data.message === "Phim đã được cập nhật") {
        dispatch(updateMovie(state, token));
        toast.success("Cập nhật phim thành công");
      } else {
        toast.error("Cập nhật phim thất bại");
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
    }
  };

  return (
    <AdminLayout>
      <form method="post" onSubmit={updateData}>
        <input
          className="inputAddMovie"
          type="text"
          placeholder="Tên phim"
          name="name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <select
          name="Category"
          className="my-select"
          value={state.category}
          onChange={(e) => setState({ ...state, category: e.target.value })}
        >
          <option value="hành động"> Hành động</option>
          <option value="học">Học</option>
        </select>

        <input
          className="inputAddMovie"
          value={state.original_name}
          type="text"
          placeholder="original_name"
          name="original_name"
          onChange={(e) =>
            setState({ ...state, original_name: e.target.value })
          }
        />
        <input
          className="inputAddMovie"
          type="text"
          placeholder="slug"
          value={state.slug}
          name="slug"
          onChange={(e) => setState({ ...state, slug: e.target.value })}
        />
        <input
          className="inputAddMovie"
          type="text"
          value={state.thumb_url}
          placeholder="thumb_url"
          name="thumb_url"
          onChange={(e) => setState({ ...state, thumb_url: e.target.value })}
        />
        <input
          className="inputAddMovie"
          type="text"
          value={state.poster_url}
          placeholder="poster_url"
          name="poster_url"
          onChange={(e) => setState({ ...state, poster_url: e.target.value })}
        />
        <input
          className="inputAddMovie"
          type="text"
          value={state.description}
          placeholder="description"
          name="description"
          onChange={(e) => setState({ ...state, description: e.target.value })}
        />
        <input className="btn-addMovie" type="submit" value="cap nhat phim" />
      </form>
      <ToastContainer></ToastContainer>
    </AdminLayout>
  );
};

export default EditMovie;
