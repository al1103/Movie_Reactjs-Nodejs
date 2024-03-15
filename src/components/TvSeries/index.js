import React, { useEffect, useState } from "react";
import { getListMovies } from "../../servers/apiNguonC";
import MovieCard from "../MovieCard";
import "./upcomingMovies.scss";
const TvSeries = () => {
  const [listMovie, setListMovie] = useState([]);
  useEffect(() => {
    getListMovies(2).then((res) => {
      setListMovie(res.items.slice(0, 4));
    });
  }, []);
  return (
    <section className="tv-series">
    <div className="container">
      <p className="section-subtitle">Best TV Series</p>
      <h2 className="h2 section-title">World Best TV Series</h2>
      <ul className="movies-list">
        {listMovie.map((movie, index) => (
          <li key={index}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};



export default TvSeries;
