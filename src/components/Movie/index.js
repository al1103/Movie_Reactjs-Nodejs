import React, { useEffect, useState } from "react";
import { getMovieAPI } from "../../servers/api";
import MovieCard from "../MovieCard";
import "./Movies.scss";
const Movies = () => {
  const [listMovie, setListMovie] = useState([]);
  const token = localStorage.getItem("token")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieAPI(token);
        setListMovie(data.slice(0, 4));
        console.log(data.slice(0, 4));
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      }
    }
    fetchData();

  }, []);
  return (
    <div className="upcoming">
      <div className="container">
        <div className="flex-wrapper">
          <div className="title-wrapper">
            <p className="section-subtitle">Online Streaming</p>
            <h2 className="h2 section-title">Upcoming Movies</h2>
          </div>
          <ul className="filter-list">
            <li>
              <button className="filter-btn">Movies</button>
            </li>
            <li>
              <button className="filter-btn">TV Shows</button>
            </li>
            <li>
              <button className="filter-btn">Anime</button>
            </li>
          </ul>
        </div>
        <ul className="movies-list  has-scrollbar">
          {listMovie.map((movie, index) => (
            <li key={index} >
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



export default Movies;
