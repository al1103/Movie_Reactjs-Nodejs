import { useState, useEffect } from "react"; // Import both useState and useEffect
import MovieCard from "../../components/MovieCard";
import { SearchMovie } from "../../servers/api"; // Assuming this function is defined elsewhere
import "./Search.scss";
const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add state for error handling
  const [category, setCategory] = useState("");
  const [quality, setQuality] = useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeQuality = (event) => {
    setQuality(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null); // Clear previous errors

    let updatedSearchTerm = searchTerm; // Start with existing search term

    if (category.length > 0) {
      updatedSearchTerm += "&category=" + category;
    }
 
    if (quality.length > 0) {
      updatedSearchTerm += "&quality=" + quality;
    }

    try {
      const response = await SearchMovie(updatedSearchTerm);

      if (response.status === "success") {
        setMovies(response.results);
      } else {
        setError(new Error("Search failed: " + response.message)); // Handle specific error message
      }
    } catch (err) {
      setError(err); // Set error for any other errors
    } finally {
      setLoading(false);
    }
  };
  const handleClear = () => {
    setSearchTerm("");
    setMovies([]);
    setCategory("");
    setQuality("");
  }

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="filter">
        <select
          name="category"
          id="category"
          onChange={handleChangeCategory}
          className="filter-category"
        >
          <option value="">All</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Mystery">Mystery</option>
          <option value="Animation">Animation</option>
        </select>
        <select
          name="quality"
          id="quality"
          onChange={handleChangeQuality}
          className="filter-quality"
        >
          <option value="FullHD">FullHD</option>
          <option value="HD">HD</option>
        </select>
        <button className="ClearButton" onClick={handleClear}>
          Clear
        </button>
      </div>

      {loading && <div className="loading">Đang tải...</div>}

      {error ? (
        <div className="error">Error: {error.message}</div>
      ) : movies.length === 0 ? (
        <div className="no-results">Không tìm thấy kết quả</div>
      ) : (
        <div className="container">
          <div className="movies-list">
            {movies.map((movie, index) => (
              <div key={index}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchMovies;
