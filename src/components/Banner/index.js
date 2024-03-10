import React from 'react'
import './Banner.scss'
import MovieCard from '../MovieCard'
const Banner = () => {
  return (
    <div>
  
  

    
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <p className="hero-subtitle">Zilong Movie</p>
              <h1 className="h1 hero-title">
                Unlimited <strong>Movie</strong>, TVs Shows, &amp; More.
              </h1>
              <div className="meta-wrapper">
                <div className="badge-wrapper">
                  <div className="badge badge-fill">PG 18</div>
                  <div className="badge badge-outline">HD</div>
                </div>
                <div className="ganre-wrapper">
                  <a href="#">Romance,</a>
                  <a href="#">Drama</a>
                </div>
                <div className="date-time">
                  <div>
                    <ion-icon name="calendar-outline" />
                    <time dateTime={2022}>2022</time>
                  </div>
                  <div>
                    <ion-icon name="time-outline" />
                    <time dateTime="PT128M">128 min</time>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary">
                <ion-icon name="play" />
                <span>Watch now</span>
              </button>
            </div>
          </div>
        </section>
        {/* 
    - #UPCOMING
  */}
     
   

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
                      <img src="./assets/images/series-1.png" alt="Moon Knight movie poster" />
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
                      <img src="./assets/images/series-2.png" alt="Halo movie poster" />
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
                      <img src="./assets/images/series-3.png" alt="Vikings: Valhalla movie poster" />
                    </figure>
                  </a>
                  <div className="title-wrapper">
                    <a href="./movie-details.html">
                      <h3 className="card-title">Vikings: Valhalla</h3>
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
                      <img src="./assets/images/series-4.png" alt="Money Heist movie poster" />
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
        {/* 
    - #CTA
  */}
     
    
    {/* 
      - #FOOTER
    */}
    
    {/* 
      - #GO TO TOP
    */}
   
  </div>
  
  )
}

export default Banner