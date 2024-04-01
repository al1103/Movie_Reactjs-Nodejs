import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Pagination from "../../../../components/pagination";
import AdminLayout from "../../../../layouts/AdminLayout";
import { getListMovies, deleteMovie } from "../../../../servers/api";
import { Link } from "react-router-dom";
const ManagerMovie = () => {
  const [listMovie, setListMovie] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPagesCalculated, setTotalPagesCalculated] = useState(1);
  const token = localStorage.getItem("token");

  const handlePageChange = (providedPage) => {
    setSelectedPage(providedPage);
  };

  const notify = (message) => toast(message);

  const handleDeleteMovie = async (id) => {
    try {
      const res = await deleteMovie(id, token);
      if (res.message === "Phim đã được xóa") {
        const newMovies = listMovie.filter((movie) => movie._id !== id);
        notify("Delete movie success");
        setListMovie(newMovies);
      } else {
        notify(res.message);
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
      notify("Error deleting movie");
    }
  };

  useEffect(() => {
    const fetchListMovies = async () => {
      try {
        const res = await getListMovies(selectedPage, token);
        setListMovie(res.movies);
        console.log(res)
        setTotalPagesCalculated(res.totalPage);
      } catch (error) {
        console.error("Error fetching movies:", error);
        notify("Error fetching movies");
      }
    };
    fetchListMovies();
  }, [selectedPage, token]);
  const getFullYear = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    return year;
  };
  return (
    <AdminLayout>
      <main className="main">
        <div className="container-fluid">
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12">
              <div className="main__title">
                <h2>Catalog</h2>
                <span className="main__title-stat">14 452 total</span>
                <div className="main__title-wrap">
                  {/* filter sort */}
                  <div className="filter" id="filter__sort">
                    <span className="filter__item-label">Sort by:</span>
                    <div
                      className="filter__item-btn dropdown-toggle"
                      role="navigation"
                      id="filter-sort"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <input type="button" defaultValue="Date created" />
                      <span />
                    </div>
                    <ul
                      className="filter__item-menu dropdown-menu scrollbar-dropdown"
                      aria-labelledby="filter-sort"
                    >
                      <li>Date created</li>
                      <li>Rating</li>
                      <li>Views</li>
                    </ul>
                  </div>
                  {/* end filter sort */}
                  {/* search */}
                  <form action="#" className="main__title-form">
                    <input type="text" placeholder="Find movie / tv series.." />
                    <button type="button">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8.25998"
                          cy="8.25995"
                          r="7.48191"
                          stroke="#2F80ED"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.4637 13.8523L16.3971 16.778"
                          stroke="#2F80ED"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </form>
                  {/* end search */}
                </div>
              </div>
            </div>
            {/* end main title */}
            {/* users */}
            <div className="col-12">
              <div className="main__table-wrap">
                <table className="main__table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>TITLE</th>
                      <th>RATING</th>
                      <th>CATEGORY</th>
                      <th>VIEWS</th>
                      <th>CRAETED DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listMovie.map((movie, index) => (
                      <tr key={movie._id}>
                        <td>
                          <div className="main__table-text">{index + 1}</div>
                        </td>
                        <td>
                          <div className="main__table-text">
                            <a href="#">{movie.name}</a>
                          </div>
                        </td>
                        <td>
                          <div className="main__table-text main__table-text--rate">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" />
                            </svg>
                            7.9
                          </div>
                        </td>
                        <td>
                          <div className="main__table-text">Movie</div>
                        </td>
                        <td>
                          <div className="main__table-text">1392</div>
                        </td>
                       
                        <td>
                          <div className="main__table-text">{getFullYear(movie.modified)}</div>
                        </td>
                        <td>
                          <div className="main__table-btns">
                            <Link
                              to={`/admin/editMovie/${movie._id}`}
                              className="main__table-btn main__table-btn--edit"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z" />
                              </svg>
                            </Link>
                            <button onClick={() => handleDeleteMovie(movie._id)}
                              className="main__table-btn main__table-btn--delete open-modal"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
         
          </div>
        </div>
        <Pagination
          totalPagesCalculated={totalPagesCalculated}
          handlePageChange={handlePageChange}
        />
      </main>
    </AdminLayout>
  );
};

export default ManagerMovie;
