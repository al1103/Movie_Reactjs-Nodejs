import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOneFilm, updateFilm } from "../../../../servers/api";
import { updateMovie } from "../../../../action";
import AdminLayout from "../../../../layouts/AdminLayout";
import "../../admin.scss";

const EditMovie = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const [original_name, setOriginalName] = useState("");
  const [slug, setSlug] = useState("");
  const [thumb_url, setThumbUrl] = useState("");
  const [poster_url, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quality, setQuality] = useState("FullHD");

  useEffect(() => {
    const pathname = window.location;
    const slugLink = pathname.pathname.split("/").pop();
    const fetchData = async () => {
      try {
        const data = await getOneFilm(slugLink, token);
        if (data.status === "success") {
          const {
            name,
            original_name,
            slug,
            thumb_url,
            poster_url,
            description,
            category,
            quality,
          } = data.movie;
          setName(name);
          setOriginalName(original_name);
          setSlug(slug);
          setThumbUrl(thumb_url);
          setPosterUrl(poster_url);
          setDescription(description);
          setCategory(category);
          setQuality(quality);
        }
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = {
      name,
      original_name,
      slug,
      thumb_url,
      poster_url,
      description,
      category,
      quality,
    };

    try {
      const data = await updateFilm(movie, token);
      if (data.message === "Phim đã được cập nhật") {
        dispatch(updateMovie(movie, token));
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
      <main className="main">
        <div className="container-fluid">
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12">
              <div className="main__title">
                <h2>Add new item</h2>
              </div>
            </div>
            <div className="col-12">
              <form className="form">
                <div className="row">
                  <div className="col-12 col-md-5 form__cover">
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-12">
                        <div className="form__img">
                          <textarea
                            onChange={(e) => {
                              setThumbUrl(e.target.value);
                            }}
                            value={thumb_url}
                            id="form__img-upload"
                            name="form__img-upload"
                            type="text"
                            className="form__textarea"
                            placeholder="add thumb url"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-7 form__content">
                    <div className="row">
                      <div className="col-12">
                        <div className="form__group">
                          <input
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                            value={name}
                            type="text"
                            className="form__input"
                            placeholder="Title"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form__group">
                          <input
                            onChange={(e) => {
                              setOriginalName(e.target.value);
                            }}
                            value={original_name}
                            type="text"
                            className="form__input"
                            placeholder="Original title"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form__group">
                          <input
                            onChange={(e) => {
                              setSlug(e.target.value);
                            }}
                            value={slug}
                            type="text"
                            className="form__input"
                            placeholder="slug"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form__gallery">
                          <input
                            onChange={(e) => {
                              setPosterUrl(e.target.value);
                            }}
                            value={poster_url}
                            name="gallery"
                            className="form__img__input"
                            placeholder="Upload photos"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form__group">
                          <textarea
                            id="text"
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                            value={description}
                            name="text"
                            className="form__textarea"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form__gallery">
                          <input
                            name="gallery"
                            onChange={(e) => {
                              setPosterUrl(e.target.value);
                            }}
                            value={thumb_url}
                            className="form__img__input"
                            placeholder="Upload photos"
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="col-12 col-sm-6 col-lg-3">
                        <div className="form__group">
                          <select
                            onChange={(e) => {
                              setQuality(e.target.value);
                            }}
                            value={quality}
                            className="js-example-basic-single"
                            id="quality"
                          >
                            <option value="FullHD">FullHD</option>
                            <option value="HD">HD</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-lg-6">
                        <div className="form__group">
                          <select
                            className="js-example-basic-multiple"
                            id="genre"
                            multiple="multiple"
                            onChange={(e) => {
                              setCategory(e.target.value);
                            }}
                            value={category}
                          >
                            <option value="Action">Action</option>
                            <option value="Animation">Animation</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Crime">Crime</option>
                            <option value="Drama">Drama</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Historical">Historical</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                            <option value="Science-fiction">
                              Science-fiction
                            </option>
                            <option value="Thriller">Thriller</option>
                            <option value="Western">Western</option>
                            <option value="Otheer">Otheer</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="button"
                          className="form__btn"
                          onClick={handleSubmit}
                        >
                          publish
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </AdminLayout>
  );
};

export default EditMovie;
