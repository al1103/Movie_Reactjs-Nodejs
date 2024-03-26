import React, { useEffect, useState } from "react";
import { getMovieAPI } from "../../servers/api";
import MovieCard from "../MovieCard";
import "./upcomingMovies.scss";
const UpcomingMovies = () => {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    getMovieAPI().then((data) => {
      if(data.status === "success"){

        setListMovie(data.data);
      }
      else{
        console.log(data.message);
      }
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
            <li key={index}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingMovies;
