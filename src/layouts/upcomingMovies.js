import React, { useEffect, useState } from "react";
import "../scss/upcomingMovies.scss";
import MovieCard from "../components/MovieCard";
import { getListMovies } from "../servers/api";

const UpcomingMovies = () => {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    getListMovies().then((res) => {
      const itemsToShow = res.slice(0, 4); // Lấy 4 items đầu tiên
      setListMovie(itemsToShow);
    });
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

export default UpcomingMovies;
