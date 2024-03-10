import React, { useEffect, useState } from "react";
import { getOneFilmNguonC } from "../../servers/apiNguonC";

const MovieItems = () => {
  const [movie, setMovie] = useState({});
  const pathname = window.location;
  const slug = pathname.pathname.split("/").pop();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOneFilmNguonC(slug);
        setMovie(data.movie);
      } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
      } finally {
        setIsLoading(false); // Always set loading to false after fetching
      }
    };
    fetchData();
  }, [slug]); //

  
  const setBackgroundImage = () => {
    if (movie.poster_url) {
      const movieDetailElement = document.querySelector('.movie-detail');
      if (movieDetailElement) {
        // Combine background image, filter, and opacity
        movieDetailElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.894) 0%, rgba(0, 0, 0, 0.745) 50%, rgba(0, 0, 0, 0.9) 100%),url(${movie.poster_url})`;
        movieDetailElement.style.opacity = 1; // Adjust opacity as needed
      }
    }
  };

  useEffect(() => {
    setBackgroundImage();
  }, [movie]);
  return (
    <>
      {isLoading ? (
        <div>Loading movie details...</div>
      ) : movie ? (
        <div>
          <div>
            <div>
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
                        <p className="detail-subtitle">New Episodes</p>
                        <h1 className="h1 detail-title">{movie.name}</h1>
                        <div className="meta-wrapper">
                          <div className="badge-wrapper">
                            <div className="badge badge-fill">PG 13</div>
                            <div className="badge badge-outline">
                              {movie.quality}
                            </div>
                          </div>
                          <div className="ganre-wrapper">
                            <a>{movie.category[2].list[0].name}</a>
                            
                          </div>
                          <div className="date-time">
                            <div>
                              <ion-icon name="calendar-outline" />
                              <time dateTime={movie.created}>
                                {movie.created}
                              </time>
                            </div>
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
                        <a
                          href=""
                          download
                          className="download-btn"
                        >
                          <span>Download</span>
                          <ion-icon name="download-outline" />
                        </a>
                      </div>
                    </div>
                  </section>
                  {/* 
    - #TV SERIES
  */}
                  <section className="tv-series">
                    <div className="container">
                      <p className="section-subtitle">Best TV Series</p>
                      <h2 className="h2 section-title">World Best TV Series</h2>
                      <ul className="movies-list">
                        <li>
                          <div className="movie-card">
                            <a href="./movie-details.html">
                              <figure className="card-banner">
                                <img
                                  src="./assets/images/series-1.png"
                                  alt="Moon Knight movie poster"
                                />
                              </figure>
                            </a>
                            <div className="title-wrapper">
                              <a href="./movie-details.html">
                                <h3 className="card-title">Moon Knight</h3>
                              </a>
                              <time dateTime={2022}>2022</time>
                            </div>
                            <div className="card-meta">
                              <div className="badge badge-outline">2K</div>
                              <div className="duration">
                                <ion-icon name="time-outline" />
                                <time dateTime="PT47M">47 min</time>
                              </div>
                              <div className="rating">
                                <ion-icon name="star" />
                                <data>8.6</data>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="movie-card">
                            <a href="./movie-details.html">
                              <figure className="card-banner">
                                <img
                                  src="./assets/images/series-2.png"
                                  alt="Halo movie poster"
                                />
                              </figure>
                            </a>
                            <div className="title-wrapper">
                              <a href="./movie-details.html">
                                <h3 className="card-title">Halo</h3>
                              </a>
                              <time dateTime={2022}>2022</time>
                            </div>
                            <div className="card-meta">
                              <div className="badge badge-outline">2K</div>
                              <div className="duration">
                                <ion-icon name="time-outline" />
                                <time dateTime="PT59M">59 min</time>
                              </div>
                              <div className="rating">
                                <ion-icon name="star" />
                                <data>8.8</data>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="movie-card">
                            <a href="./movie-details.html">
                              <figure className="card-banner">
                                <img
                                  src="./assets/images/series-3.png"
                                  alt="Vikings: Valhalla movie poster"
                                />
                              </figure>
                            </a>
                            <div className="title-wrapper">
                              <a href="./movie-details.html">
                                <h3 className="card-title">
                                  Vikings: Valhalla
                                </h3>
                              </a>
                              <time dateTime={2022}>2022</time>
                            </div>
                            <div className="card-meta">
                              <div className="badge badge-outline">2K</div>
                              <div className="duration">
                                <ion-icon name="time-outline" />
                                <time dateTime="PT51M">51 min</time>
                              </div>
                              <div className="rating">
                                <ion-icon name="star" />
                                <data>8.3</data>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="movie-card">
                            <a href="./movie-details.html">
                              <figure className="card-banner">
                                <img
                                  src="./assets/images/series-4.png"
                                  alt="Money Heist movie poster"
                                />
                              </figure>
                            </a>
                            <div className="title-wrapper">
                              <a href="./movie-details.html">
                                <h3 className="card-title">Money Heist</h3>
                              </a>
                              <time dateTime={2017}>2017</time>
                            </div>
                            <div className="card-meta">
                              <div className="badge badge-outline">4K</div>
                              <div className="duration">
                                <ion-icon name="time-outline" />
                                <time dateTime="PT70M">70 min</time>
                              </div>
                              <div className="rating">
                                <ion-icon name="star" />
                                <data>8.3</data>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </section>
                </article>
            </div>
          </div>
        </div>
      ) : (
        <div>Movie data not found.</div>
      )}
    </>
  );
};

export default MovieItems;
