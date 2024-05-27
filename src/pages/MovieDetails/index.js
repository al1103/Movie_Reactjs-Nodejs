import React, { useEffect, useState } from "react";
import MovieItemsLayout from "../../layouts/MovieItemLayout";
import MovieItems from "../../components/MovieItems";
import "./style.scss";
import { getOneFilm, getUser } from "../../servers/api";

const MovieDetail = () => {
  const [checkUser, setCheckUser] = useState(true);
  const [age, setAge] = useState(0);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleQuick = () => {
    window.location.href = "/";
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const pathname = window.location;
  const slug = pathname.pathname.split("/").pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOneFilm(slug);
        setMovie(data);
        const categoryArray = Object.values(data.category).reduce(
          (acc, categoryItem) => {
            if (Array.isArray(categoryItem.list)) {
              categoryItem.list.forEach((listItem) => {
                if (listItem && listItem.name) {
                  acc.push(listItem.name);
                }
              });
            }
            return acc;
          },
          []
        );
        setCategory(categoryArray);
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const id = JSON.parse(user)._id;
      const fetchDataUser = async () => {
        const token = localStorage.getItem("token");
        const userdata = await getUser(id, token);
        setAge(userdata.age);
      };
      fetchDataUser();
    } else {
      setShowLoginPopup(true); // Show login popup if not logged in
    }
  }, []);

  useEffect(() => {
    setCheckUser(category.includes('Kinh Dị') && age < 18);

    if (checkUser) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount or checkUser change
    };
  }, [category, age]);

  return (
    <MovieItemsLayout>
      {showLoginPopup ? (
        <div className="wrapper">
          <div className="popup">
            <div className="content">
              <div className="content-wrapper">
                <h1>Vui lòng đăng nhập</h1>
                <p>Bạn cần đăng nhập để xem nội dung này.</p>
                <button
                  className="button-17"
                  role="button"
                  onClick={handleLogin}
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : checkUser ? (
        <div className="wrapper">
          <div className="popup">
            <div className="content">
              <div className="content-wrapper">
                <h1>Bạn chưa đủ 18 tuổi</h1>
                <p>Do you like it?</p>
                <button
                  className="button-17"
                  role="button"
                  onClick={handleQuick}
                >
                  Quay lại trang home
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MovieItems />
      )}
    </MovieItemsLayout>
  );
};

export default MovieDetail;
