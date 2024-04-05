import React, { useEffect, useState } from "react";
import { getOneFilmNguonC } from "../../servers/apiNguonC";
import { Link } from "react-router-dom";
import MovieItemsLayout from "../../layouts/MovieItemLayout";
import Comment from "../../components/Comment";

const WatchMovie = () => {
  const [movie, setMovie] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [srcVideo, setSrcVideo] = useState("");
  const pathname = window.location;
  const slug = pathname.pathname.split("/").pop();
  const name = pathname.pathname.split("/").slice(-2, -1)[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOneFilmNguonC(name);
        setMovie(data.movie);
        console.log(data.movie);
        setEpisodes(data.movie.episodes[0].items);
        const targetEpisode = episodes.find((episode) => episode.slug === slug);
        console.log(targetEpisode);
        if (targetEpisode) {
          // setSrcVideo(targetEpisode.embed);
        }
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once

  const VideoPlayer = ({ srcVideo }) => {
    return (
      <div className="container video-player">
        {srcVideo && (
          <iframe src={srcVideo} className="video w-100 jw-video" controls />
        )}
        {!srcVideo && <p>No video available</p>}
      </div>
    );
  };

  // [episodes, slug] dependency array to run effect whenever episodes or slug changes

  return (
    <>
      <MovieItemsLayout>
        {isLoading ? (
          <div>Loading movie details...</div>
        ) : movie ? (
          <div>
            <div>
              <div>
                <article>
                  <VideoPlayer
                    className="w-100"
                    srcVideo={srcVideo}
                  ></VideoPlayer>
                  <div id="episodes" className="sbox fixidtab container my-5">
                    <h2>Chọn tập phim</h2>
                    <div id="seasons">
                      <div className="se-c">
                        <div className="se-q"></div>
                        <div className="se-a" style={{ display: "block" }}>
                          <ul className="episodios">
                            {episodes &&
                              episodes.map((ep, index) => (
                                <li key={index}>
                                  <Link
                                    to={`/${movie.slug}/${ep.slug}`}
                                    className="btn btn-outline-info m-1"
                                  >
                                    {ep.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
    - #TV SERIES
  */}
                  <section className="tv-series">
                    <div className="container">
                      <p className="section-subtitle">Best TV Series</p>
                      <h2 className="h2 section-title">World Best TV Series</h2>
                      <ul className="movies-list"></ul>
                    </div>
                  </section>
                </article>
              </div>
            </div>
          </div>
        ) : (
          <div>Movie data not found.</div>
        )}
        <Comment></Comment>
      </MovieItemsLayout>
    </>
  );
};

export default WatchMovie;
