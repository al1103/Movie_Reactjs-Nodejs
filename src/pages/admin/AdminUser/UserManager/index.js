import React, { useEffect, useState } from "react";
import Pagination from "../../../../components/pagination";
import AdminLayout from "../../../../layouts/AdminLayout";
import { getListUsers } from "../../../../servers/api";
import { Link } from "react-router-dom";
const UserManager = () => {
  const [listUser, setListUser] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [totalPagesCalculated, setTotalPagesCalculated] = useState(1);
  const token = localStorage.getItem("token");

  const handlePageChange = (providedPage) => {
    setSelectedPage(providedPage);
  };

  const handleDeleteMovie = async (id) => {
    console.log(id);
  };
  useEffect(() => {
    const fetchListMovies = async () => {
      try {
        const res = await getListUsers(selectedPage, token);
        setListUser(res.users);
        setTotalPagesCalculated(res.totalPage);
      } catch (error) {
        console.error("Error fetching movies:", error);
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
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>CRAETED DATE</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listUser.map((user, index) => (
                      <tr key={user._id}>
                        <td>
                          <div className="main__table-text">{index + 1}</div>
                        </td>
                        <td>
                          <div className="main__table-text">
                            <a href="#">{user.username}</a>
                          </div>
                        </td>

                        <td>
                          <div className="main__table-text">1392</div>
                        </td>

                        <td>
                          <div className="main__table-text">
                            {getFullYear(user.createdAt)}
                          </div>
                        </td>
                        <td>
                          <div className="main__table-btns">
                            <Link
                              to={`/admin/edituser/${user._id}`}
                              className="main__table-btn main__table-btn--edit"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z" />
                              </svg>
                            </Link>
                            <button
                              onClick={() => handleDeleteMovie(user._id)}
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

export default UserManager;
