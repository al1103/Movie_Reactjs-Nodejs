import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addMovie } from "../../../../servers/api";
import { useSelector, useDispatch } from 'react-redux';
import AdminLayout from "../../../../layouts/AdminLayout";
import { addMovie as addMovieState } from "../../../../action";


const AddMovie = () => {
  const { token } = useSelector((state) => state.Movie);
  const [name, setName] = useState("");
  const [original_name, setOriginalName] = useState("");
  const [slug, setSlug] = useState("");
  const [thumb_url, setThumbUrl] = useState("");
  const [poster_url, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("hành động");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = {
      name,
      original_name,
      slug,
      thumb_url,
      poster_url,
      // description,
      category,
    };
    try {
      await addMovie(movie, token).then((res) => {
        if (res.message === "Phim đã được tạo thành công") {
          toast("Thêm phim thành công");
        } else {
          toast("Thêm phim thất bại");
        }
      });
    } catch (error) {
      toast("Thêm phim thất bại");
    }
  };
  return (
    <AdminLayout>
      <form method="post" className="content-admin" onSubmit={handleSubmit}>
        <input
          className="inputAddMovie"
          type="text"
          placeholder="Tên phim"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <select
          name="Category"
          className="my-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="hành động"> Hành động</option>
          <option value="học">Học</option>
        </select>

        <input
          className="inputAddMovie"
          type="text"
          placeholder="original_name"
          name="original_name"
          onChange={(e) => setOriginalName(e.target.value)}
        />
        <input
          className="inputAddMovie"
          type="text"
          placeholder="slug"
          name="slug"
          onChange={(e) => setSlug(e.target.value)}
        />
        <input
          className="inputAddMovie"
          type="text"
          placeholder="thumb_url"
          name="thumb_url"
          onChange={(e) => setThumbUrl(e.target.value)}
        />
        <input
          className="inputAddMovie"
          type="text"
          placeholder="poster_url"
          name="poster_url"
          onChange={(e) => setPosterUrl(e.target.value)}
        />
        <input
          className="inputAddMovie"
          type="text"
          placeholder="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input className="btn-addMovie" type="submit" value="Them phim" />
      </form>
      <ToastContainer></ToastContainer>
    </AdminLayout>
  );
};

export default AddMovie;
