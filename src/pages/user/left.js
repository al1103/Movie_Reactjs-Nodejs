import React from "react";
import { Link } from "react-router-dom";

import { logout, getFav } from "../../action";
import { useDispatch } from "react-redux";
const Left = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // setToken(false);
  };
  return (
    <div className="member-left ewave-sticky left">
    
    
    <ul>
      <li className="active">
       
      </li>
      <li className="active" >
        <Link to="/user">
          <i className="fa fa-id-card-o fa-fw" />
          <span>Thông tin của tôi</span>
          <span className="member-angle">
            <i className="fa fa-angle-right" />
          </span>
        </Link>
      </li>
      {/* <li className="active">
        <Link to="/user/favs">
          <i className="fa fa-star-o fa-fw" />
          <span>Danh sách yêu thích</span>
          <span className="member-angle">
            <i className="fa fa-angle-right" />
          </span>
        </Link>
      </li> */}
      {/* <li className="active">
        <Link to="/user/plays">
          <i className="fa fa-history fa-fw" />
          <span>Lịch sử xem phim</span>
          <span className="member-angle">
            <i className="fa fa-angle-right" />
          </span>
        </Link>
      </li> */}
 
      <li className="active">
        <Link to="/user/buy">
          <i className="fa fa-diamond fa-fw" />
          <span>Nạp điểm</span>
          <span className="member-angle">
            <i className="fa fa-angle-right" />
          </span>
        </Link>
      </li>
      <li className="active">
        <Link to="/user/upgrade">
          <i className="fa fa-vimeo fa-fw" />
          <span>Nâng cấp VIPthành viên</span>
          <span className="member-angle">
            <i className="fa fa-angle-right" />
          </span>
          <span className="member-angle">
            <i className="fa fa-angle-right" />
          </span>
        </Link>
      </li>
      
    
     
    </ul>
  </div>
  );
};

export default Left;
