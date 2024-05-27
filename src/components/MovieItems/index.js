import React, { useEffect, useState } from "react";
import { getOneFilm, getUser } from "../../servers/api";
import { Link } from "react-router-dom";
import "./style.scss";
import Comment from "../Comment";
import Episode from "../episodes";
import { Button } from "antd";
import { AddFavorite } from "../../servers/users";
import { ToastContainer, toast } from "react-toastify";

const MovieItems = () => {
  const [movie, setMovie] = useState({});
  const pathname = window.location;
  const slug = pathname.pathname.split("/").pop();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [age, setAge] = useState(0);
  const [checkUser, setCheckUser] = useState(true);
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
        setIsLoading(false); // Luôn đặt isLoading thành false sau khi fetch xong
      }
    };

    fetchData();
  }, [slug]);


  const setBackgroundImage = () => {
    if (movie.poster_url) {
      const movieDetailElement = document.querySelector(".movie-detail");
      if (movieDetailElement) {
        // Combine background image, filter, and opacity
        movieDetailElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.894) 0%, rgba(0, 0, 0, 0.745) 50%, rgba(0, 0, 0, 0.9) 100%),url(${movie.poster_url})`;
        movieDetailElement.style.opacity = 1; // Adjust opacity as needed
      }
    }
  };

  const handleAddToFavorite = async () => {
    const info = {
      name: movie.name,
      slug: movie.slug,
      thumb_url: movie.thumb_url,
    };
    const token = localStorage.getItem("token");
    const movieidfav = JSON.stringify(info);
    if (!token) {
      const fav = localStorage.getItem("favorite");
      const favorite = JSON.parse(fav) || [];

      if (!favorite.some((favInfo) => JSON.stringify(favInfo) === movieidfav)) {
        favorite.push(info);
        localStorage.setItem("favorite", JSON.stringify(favorite));
        toast.success("Đã thêm vào yêu thích");
      } else {
        toast.warning("Phim đã có trong danh sách yêu thích");
      }
    } else {
      const data = await AddFavorite(info, token);
      if (data.status === "success") {
        const fav = localStorage.getItem("favorite");
        const favorite = JSON.parse(fav) || [];
        if (
          !favorite.some((favInfo) => JSON.stringify(favInfo) === movieidfav)
        ) {
          favorite.push(info);
          localStorage.setItem("favorite", JSON.stringify(favorite));
          toast.success("Đã thêm vào yêu thích");
        } else {
          alert("Phim đã có trong danh sách yêu thích");
        }
      } else {
        toast.warning("Phim đã có trong danh sách yêu thích");
      }
    }
  };

  useEffect(() => {
    setBackgroundImage();
  }, [movie]);
  return (
    <div>
      {isLoading ? (
        <div>Loading movie details...</div>
      ) : movie ? (
              <article>
                <section className="movie-detail">
                  <div className="container">
                    <figure className="movie-detail-banner">
                      <img src={movie.thumb_url} alt={movie.original_name} />
                      <button className="play-btn">
                        <ion-icon name="play-circle-outline" />
                      </button>
                    </figure>
                    <div className="movie-detail-content">
                      <p className="detail-subtitle">{movie.language}</p>
                      <h1 className="h1 detail-title">{movie.name}</h1>
                      <div className="meta-wrapper">
                        <div className="badge-wrapper">
                          <div className="badge badge-outline">
                            {movie.quality}
                          </div>
                        </div>
                        <div className="ganre-wrapper">
                          {movie.category[2].list.map((item, index) => (
                            <span key={index} className="badge badge-outline">
                              {item.name}
                            </span>
                          ))}
                        </div>

                        <div className="date-time">
                          <div>
                            <ion-icon name="time-outline" />
                            <time dateTime="PT115M">{movie.time}</time>
                          </div>
                        </div>
                      </div>
                      <p className="storyline">{movie.description}</p>
                      <div className="details-actions">
                        <button className="share">
                          <ion-icon name="share-social" />
                          <span>Share</span>
                        </button>
                        <div className="title-wrapper">
                          <p className="title">Prime Video</p>
                          <p className="text">Streaming Channels</p>
                        </div>
                        <button className="btn btn-primary">
                          <ion-icon name="play" />
                          <span>Watch Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="container">
                  <Button onClick={handleAddToFavorite} type="primary">
                    add to favorites
                  </Button>
                </div>
                <div className="background-episodes">
                  <Episode movie={movie}></Episode>
                </div>

              </article>
      ) : (
        <div>Movie data not found.</div>
      )}
      <Comment id={movie._id}></Comment>
      <ToastContainer />
    </div>
  );
};

export default MovieItems;
