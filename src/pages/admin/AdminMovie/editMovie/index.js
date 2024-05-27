import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getOneFilm, updateFilm } from "../../../../servers/api";
import { updateMovie } from "../../../../action";
import AdminLayout from "../../../../layouts/AdminLayout";
import { Flex, Tag } from "antd";
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
  const [_id, setId] = useState("");
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
    "gây cấn"
];













  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...category, tag]
      : category.filter((t) => t !== tag);
    setCategory(nextSelectedTags);
  };

  useEffect(() => {
    const pathname = window.location;
    const slugLink = pathname.pathname.split("/").pop();
    const fetchData = async () => {
      try {
        const data = await getOneFilm(slugLink, token);

        console.log("data", );
          const {
            _id,
            name,
            original_name,
            slug,
            thumb_url,
            poster_url,
            description,
            quality,
          } = data;
          setId(_id);
          setName(name);
          setOriginalName(original_name);
          setSlug(slug);
          setThumbUrl(thumb_url);
          setPosterUrl(poster_url);
          setDescription(description);
          setCategory(data.category[2].list.map((item) => item.name.toLowerCase()));
          setQuality(quality);
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    };

    fetchData();
  }, []);
  console.log("category", category);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = {
      _id,
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
      if (data.status === "success") {
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
                            multiple
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
                    
                      <div className="col-12 col-sm-12 col-lg-12">
                      
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
