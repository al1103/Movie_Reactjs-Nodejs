import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addMovie } from "../../../../servers/api";
import { useSelector } from "react-redux";
import AdminLayout from "../../../../layouts/AdminLayout";
import { addMovie as addMovieState } from "../../../../action";
import { Flex, Tag } from "antd";
import "../../admin.scss";

const AddMovie = () => {
  const { token } = useSelector((state) => state.Movie);
  const [name, setName] = useState("");
  const [original_name, setOriginalName] = useState("");
  const [slug, setSlug] = useState("");
  const [thumb_url, setThumbUrl] = useState("");
  const [poster_url, setPosterUrl] = useState("");
  const [description, setDescription] = useState("");
  const [quality, setQuality] = useState("FullHD");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [time , setTime] = useState(0);
  const [language, setLanguage] = useState("");
  const categoryArray = [
    "hành động",
    "hoạt hình",
    "kinh dị",
    "tình cảm",
    "tâm lý",
    "gia đình",
    "hình sự",
    "chiến tranh",
    "bi kịch",
    "cổ trang",
    "chính kịch",
    "phim hài",
    "ca nhạc",
    "khoa học viễn tưởng",
    "tài liệu",
    "hài dài tập",
    "phiêu lưu",
    "kỳ ảo",
    "trinh thám",
    "tội phạm",
    "lãng mạn",
    "lịch sử",
    "gây cấn",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); 

    const movie = {
      name,
      original_name,
      slug,
      thumb_url,
      poster_url,
      description,
      category,
      quality,
      time,
      language
      
    };

    try {
      const res = await addMovie(movie, token);

      if (res && res.status === "success") {
        // Check if res exists to avoid errors
        toast("Thêm phim thành công");

        // Reset Form Fields (Concise Version)
        Object.keys(movie).forEach((key) => {
          if (key === "quality") setQuality("FullHD");
          else if (key === "category") setCategory([]);
          else window["set" + key.charAt(0).toUpperCase() + key.slice(1)]("");
        });
      } else {
        toast(res?.message || "Thêm phim thất bại"); // Display a more specific error message if available
      }
    } catch (error) {
      console.error("Movie Add Error:", error);
      toast("Thêm phim thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...category, tag]
      : category.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setCategory(nextSelectedTags);
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
                      <div className="col-3">
                        <div className="form__group">
                          <textarea
                            id="text"
                            onChange={(e) => {
                              setTime(e.target.value);
                            }}
                            name="text"
                            className="form__textarea"
                            placeholder="time"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form__group">
                          <textarea
                            id="text"
                            onChange={(e) => {
                              setLanguage(e.target.value);
                            }}
                            name="text"
                            className="form__textarea"
                            placeholder="Language"
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

                      <Flex gap={4} wrap align="center">
                        <span>Categories:</span>
                        {categoryArray.map((tag) => (
                          <Tag.CheckableTag
                            key={tag}
                            checked={category.includes(tag)}
                            onChange={(checked) => handleChange(tag, checked)}
                          >
                            {tag}
                          </Tag.CheckableTag>
                        ))}
                      </Flex>
                      <div className="col-12 col-lg-6"></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="button"
                          className="form__btn"
                          onClick={handleSubmit}
                          disabled={loading}
                        >
                          {loading ? "Publishing..." : "Publish"}
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
