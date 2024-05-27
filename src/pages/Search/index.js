import React, { useState } from "react";
import MovieCard from "../../components/MovieCard";
import { Select, Space } from "antd";
import { SearchMovie } from "../../servers/api"; // Assuming this function is defined elsewhere
import Pagination from "../../components/pagination/index";
import Loading from "../../components/Loading";
import "./Search.scss";

function convertText(text) {
  const nonAccentText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const dashedText = nonAccentText.replace(/\s+/g, "-");
  return dashedText;
}

const SearchMovies = () => {
 

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add state for error handling
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);



  const handleChange = (value) => {
    setCategory(value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangePage = (page) => {
    setPage(page);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleFillterMovie = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await SearchMovie(searchTerm , category);

      if (response.status === "success") {
        console.log(response);
        setMovies(response.data);
      } else {
        setError(new Error("Search failed: " + response.message)); // Handle specific error message
      }
    } catch (err) {
      setError(err); // Set error for any other errors
    } finally {
      setLoading(false);
    }
  }


  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    let updatedSearchTerm = convertText(searchTerm);
    

    try {
      const response = await SearchMovie(updatedSearchTerm, category);
      if (response.status === "success") {
        console.log(response);
        setMovies(response.data);
      } else {
        setError(new Error("Search failed: " + response.message)); // Handle specific error message
      }
    } catch (err) {
      setError(err); // Set error for any other errors
    } finally {
      setLoading(false);
    }
  };

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
        <Space wrap>
          <Select
            defaultValue="thể loại"
            style={{
              width: 140,
            }}
            onChange={handleChange}
            options={[
              { value: "hanh-dong", label: "Hành động" },
              { value: "hai-huoc", label: "Hài hước" },
              { value: "tinh-cam", label: "Tình cảm" },
              { value: "kinh-di", label: "Kinh dị" },
              { value: "vien-tuong", label: "Viễn tưởng" },
              { value: "hoat-hinh", label: "Hoạt hình" },
              { value: "chien-tranh", label: "Chiến tranh" },
              { value: "lich-su", label: "Lịch sử" },
              { value: "giai-tri", label: "Giải trí" },
              { value: "tai-lieu", label: "Tài liệu" },
              { value: "phieu", label: "Phiêu lưu" },
              { value: "vo-thuat", label: "Võ thuật" },
              { value: "am-nhac", label: "Âm nhạc" },
              { value: "giao-duc", label: "Giáo dục" },
              { value: "toc-do", label: "Tốc độ" },
            ]}
          />
        </Space>
        <button className="btn btn-primary ml-4" onClick={ handleFillterMovie}>
          Lọc
        </button>
      </div>
      {loading && <Loading />}{" "}
      {/* Show loading component when loading is true */}
      {!loading && !error && movies.length === 0 && (
        <div className="no-results">Không tìm thấy kết quả</div>
      )}
      {!loading && error && <div className="error">Error: {error.message}</div>}
      {!loading && !error && movies.length > 0 && (
        <div className="container">
          <div className="movies-list">
            {movies.map((movie, index) => (
              <div key={index}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
          <Pagination
            totalPagesCalculated={movies.length / 8}
            handlePageChange={handleChangePage}
          />
        </div>
      )}
    </div>
  );
};

export default SearchMovies;
