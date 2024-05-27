import React, { useEffect, useState } from "react";
import { getOneFilm } from "../../servers/api";
import MovieItemsLayout from "../../layouts/MovieItemLayout";
import "./style.scss";
import Episode from "../../components/episodes";

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
        const data = await getOneFilm(name);
        setMovie(data);
        setEpisodes(data.episodes[0].items);
        data.episodes[0].items.find((ep) => {
          if (ep.slug === slug) {
            setSrcVideo(ep.embed);
          }
        });
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug, name]);

  const VideoPlayer = ({ srcVideo }) => (
    <div className="container video-player">
      {srcVideo && (
        <iframe
          src={srcVideo}
          className="video w-100 jw-video boder"
          allowFullScreen
          frameBorder="0"
          title="video player"
          allow="fullscreen"
        />
      )}
      {!srcVideo && <p>No video available</p>}
    </div>
  );
  
  useEffect(() => {
    const ads = "https://img.streamvd.club/public/images/i9/pc.gif";
    const img = document.querySelector(`img[src="${ads}"]`);
    
    if (img) {
      img.style.display = "none";
    }
  }, []);
  return (
    <>
      <MovieItemsLayout>
        {isLoading ? (
          <div>Loading movie details...</div>
        ) : (
          <div className="container">
            <div>
              <div>
                <article>
                  <VideoPlayer
                    className="w-100"
                    srcVideo={srcVideo}
                  ></VideoPlayer>
                  <div className="server-info">
                    <p>
                      Nếu xem phim bị giật lag, hãy chuyển server khác bên dưới.
                    </p>
                    <div>
                      <h2>Chọn server</h2>
                      <a href={srcVideo} target="blank">
                        <button>Server 1</button>
                      </a>
                    </div>
                  </div>
                  <Episode slug={slug} movie={movie}></Episode>
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
        )}
      </MovieItemsLayout>
    </>
  );
};

export default WatchMovie;
