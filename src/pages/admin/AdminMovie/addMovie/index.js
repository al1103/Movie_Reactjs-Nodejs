import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addMovie } from "../../../../servers/api";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../../../../layouts/AdminLayout";
import { addMovie as addMovieState } from "../../../../action";
import "../../admin.scss";
import { set } from "mongoose";

const AddMovie = () => {
  const { token } = useSelector((state) => state.Movie);
  const [name, setName] = useState("");
  const [original_name, setOriginalName] = useState("");
  const [slug, setSlug] = useState("");
  const [thumb_url, setThumbUrl] = useState("");
  const [poster_url, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quality, setQuality] = useState("FullHD");

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
      <main className="main">
        <div className="container-fluid">
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12">
              <div className="main__title">
                <h2>Add new item</h2>
              </div>
            </div>
            <div className="col-12">
              <form  className="form">
                <div className="row">
                  <div className="col-12 col-md-5 form__cover">
                    <div className="row">
                      <div className="col-12 col-sm-6 col-md-12">
                        <div className="form__img">
                          <textarea
                            onChange={(e) => {
                              setThumbUrl(e.target.value);
                            }}
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
                        <button type="button" className="form__btn" onClick={handleSubmit}>
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

export default AddMovie;
