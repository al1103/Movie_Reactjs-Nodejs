import React, { useEffect, useState } from "react";
import Pagination from "../../../../components/pagination";
import AdminLayout from "../../../../layouts/AdminLayout";
import { getListMovies } from "../../../../servers/api";
const Admin = () => {
  const [listMovie, setListMovie] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const totalPagesCalculated = Math.ceil(
    8
  );
  const handlePageChange = (providedPage) => {
    setSelectedPage(providedPage);
  };
  useEffect(() => {
    const fetchListMovies = async () => {
      try {
        const res = await getListMovies(selectedPage);
        setListMovie(res);
      } catch (error) {
        // Handle error here, like displaying an error message
        console.error("Error fetching movies:", error);
      }
    };
    fetchListMovies();
  }, [selectedPage]);



  const getFullYear = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    return year;
  }
  return (
    <AdminLayout>
      <div className="body-wrapper content-admin">
        <div className="">


          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="card w-100">
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold mb-4">
                  Recent Transactions
                </h5>
                <div className="table-responsive">
                  <table className="table mb-0 align-middle">
                    <thead className="text-dark fs-4">
                      <tr>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Id</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Name</h6>
                        </th>
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Name</h6>
                        </th>
                       
                        <th className="border-bottom-0">
                          <h6 className="fw-semibold mb-0">Action</h6>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {listMovie.map((movie, index) => (
                        <tr key={index} className="border-bottom">
                          <td className="border-bottom-0">
                            <h6 className="fw-semibold mb-0">{index + 1}</h6>
                          </td>
                          <td className="border-bottom-0 d-flex align-items-center gap-3  ">
                            <div className="d-flex align-items-center img_movie rounded-circle overflow-hidden">
                              <img
                                className="img-fluid w-100 h-100 "
                                src={movie.thumb_url}
                                alt={movie.thumb_url}
                              />
                            </div>
                            <div className="d-flex flex-column flex-1  gap-2 ">
                              <h6 className="fw-semibold mb-1 nameMovie">{movie.name}</h6>
                              <span className="fw-normal nameMovie">{movie.original_name}</span>
                            </div>
                          </td>
                          <td className="border-bottom-0">
                            <p className="mb-0 fw-normal">{getFullYear(movie.modified)}</p>
                          </td>
                          
                          <td className="border-bottom-0 w-25">
                            <div className="d-flex align-items-center gap-3">
                              <button className="fw-semibold mb-0 fs-4">
                                EDIT
                              </button>
                              <button className="fw-semibold mb-0 fs-4">
                                DELETE
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
        </div>
      <Pagination
              totalPagesCalculated={totalPagesCalculated}
              handlePageChange={handlePageChange}
            />
      </div>
    </AdminLayout>
  );
};

export default Admin;
