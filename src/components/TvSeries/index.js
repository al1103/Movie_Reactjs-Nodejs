import React, { useEffect, useState } from "react";
import { FilterMovie, getListMovies } from "../../servers/api";
import MovieCard from "../MovieCard";
import "./upcomingMovies.scss";

const TvSeries = () => {
  const [listMovie, setListMovie] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const category = "hanh-dong";
        const response = await FilterMovie(category, limit); // Assuming FilterMovie is an async function
        if (response.status === "success") {
          setListMovie(response.data);
        } else {
          console.error("Error fetching movies:", response.message);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();

  }, [limit]); // Empty dependency array means this effect runs only once after the component mounts



  const handleMoreMovie = () => {
    setLimit(limit + 4);
   
  }
  return (
    <section className="tv-series">
      <div className="container">
        <p className="section-subtitle">Best Action Series</p>
        <h2 className="h2 section-title">World Best Action Series</h2>
        <ul className="movies-list">
          {listMovie.map((movie, index) => (
            <li key={index}>
              <MovieCard movie={movie._id} />
            </li>
          ))}
        </ul>
      </div>
      <button className="filter-btn more" onClick={handleMoreMovie}>More Movies</button>

    </section>
  );
};

export default TvSeries;
