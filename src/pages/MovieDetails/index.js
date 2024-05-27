import React, { useEffect, useState } from "react";
import MovieItemsLayout from "../../layouts/MovieItemLayout";
import MovieItems from "../../components/MovieItems";
import "./style.scss";
import { getOneFilm, getUser } from "../../servers/api";

const MovieDetail = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [checkUser, setCheckUser] = useState(false); // Assume not old enough before checking
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [category, setCategory] = useState([]); // Movie genre list
  const [movie, setMovie] = useState({});
  const handleQuick = () => {
    window.location.href = "/";
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const pathname = window.location;
  const slug = pathname.pathname.split("/").pop();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getOneFilm(slug);
        setMovie(data);
        const categoryArray = Object.values(data.category).reduce(
          (acc, categoryItem) => {
            if (Array.isArray(categoryItem.list)) {
              categoryItem.list.forEach((listItem) => {
                if (listItem && listItem.name) {
                  acc.push(listItem.name);
                }
              });
            }
            return acc;
          },
          []
        );
        setCategory(categoryArray);
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieData();
  }, [slug]);

  useEffect(() => {
    const checkUserAge = async () => {
      const token = localStorage.getItem("token");
      if (category.includes("kinh dị")) {
        if (token) {
          setIsLoading(true);
          setShowLoginPopup(false);
          try {
            const data = await getUser(token);
            if(data.data.data.age < 18) {
              setCheckUser(true);
            } else {
              setCheckUser(false);
            }
          } catch (error) {
            console.error("An error occurred:", error);
          } finally {
            setIsLoading(false);
          }
        } else {
          setShowLoginPopup(true);
        }
      }

      // if (category.includes("kinh dị") && token) {
      //   setIsLoading(true); // Start loading data
      //   try {
      //     const data = await getUser(token);
      //     setCheckUser(data.data.data.age < 18); // Invert checkUser value
      //   } catch (error) {
      //     console.error("An error occurred:", error);
      //     // Handle error (e.g., notification, logout,...)
      //   } finally {
      //     setIsLoading(false); // Finish loading data
      //   }
      // } else {
      //   setCheckUser(false); // Not horror or not logged in => allowed to watch
      //   setIsLoading(false);
      // }
    };

    checkUserAge();
  }, [category]);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading while checking
  }

  return (
    <MovieItemsLayout>
      {showLoginPopup ? (
        <LoginPopup handleLogin={handleLogin} />
      ) : checkUser ? (
        <AgeRestrictionPopup handleQuick={handleQuick} />
      ) : (
        <MovieItems />
      )}
    </MovieItemsLayout>
  );
};

const LoginPopup = ({ handleLogin }) => (
  <div className="wrapper">
    <div className="popup">
      <div className="content">
        <div className="content-wrapper">
          <h1>Please log in</h1>
          <p>You need to log in to view this content.</p>
          <button className="button-17" role="button" onClick={handleLogin}>
            Log in
          </button>
        </div>
      </div>
    </div>
  </div>
);

const AgeRestrictionPopup = ({ handleQuick }) => (
  <div className="wrapper">
    <div className="popup">
      <div className="content">
        <div className="content-wrapper">
          <h1>You are under 18</h1>
          <p>Do you like it?</p>
          <button className="button-17" role="button" onClick={handleQuick}>
            Go back to home page
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetail;
