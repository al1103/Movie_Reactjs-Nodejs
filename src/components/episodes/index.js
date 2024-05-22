import React from "react";
import { Link } from "react-router-dom";

const Episode = ({ movie, slug }) => {
  const episodes = movie.episodes[0].items;

  return (
    <div className="background-episodes">
      <div id="episodes" className="container py-5  ">
        <h2>Chọn tập phim</h2>
        <div id="seasons">
          <div className="se-c">
            <div className="se-q"></div>
            <div className="se-a" style={{ display: "block" }}>
              <ul className="episodios">
                {episodes.map((ep, index) => (
                  <li key={index}>
                    <a
                      href={`/${movie.slug}/${ep.slug}`}
                      className={`btn btn-outline-info m-1 ${
                        ep.slug === slug ? "active" : ""
                      }`}
                    >
                      {ep.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
