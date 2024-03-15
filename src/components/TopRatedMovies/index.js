import React, { useEffect, useState } from "react";
import { getListMovies } from "../../servers/apiNguonC";
import MovieCard from "../MovieCard";
import "./TopRatedMovies.scss";
const TopRatedMovies = () => {
  const [listTopMovie, setListTopMovie] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getListMovies(1, token).then((res) => {
      setListTopMovie(res.items.slice(0, 4));
    });
  }, []);
  return (
    <div className="top-rated">
      <div className="container">
        <p className="section-subtitle">Online Streaming</p>
        <h2 className="h2 section-title">Top Rated Movies</h2>
        <ul className="filter-list">
          <li>
            <button className="filter-btn">Movies</button>
          </li>
          <li>
            <button className="filter-btn">TV Shows</button>
          </li>
          <li>
            <button className="filter-btn">Documentary</button>
          </li>
          <li>
            <button className="filter-btn">Sports</button>
          </li>
        </ul>
        <ul className="movies-list">
          {listTopMovie.map((movie, index) => (
            <li key={index}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopRatedMovies;
