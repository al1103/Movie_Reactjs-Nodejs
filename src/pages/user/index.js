import React, { useEffect, useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import { Link } from "react-router-dom";
import { getUser } from "../../servers/api";

const UserPage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [subscriptionExpiration, setSubscriptionExpiration] =
    useState("Vô thời hạn");
  const token = localStorage.getItem("token");

  const id = user._id;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(id, token);
        setUser(response);
        setLoading(false);
        console.log(response);
        if (
          response &&
          response.package &&
          response.package.length > 0 &&
          response.package[0].subscriptionExpiration
        ) {
          setSubscriptionExpiration(response.package[0].subscriptionExpiration);
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserLayout>
      <div className="member-right">
        <h2 className="member-title">Thông tin của tôi</h2>
        <div className="member-tab-list">
          <ul className="clearfix">
            <li className="active">Thông tin cơ bản</li>
            <li>
              <Link to="info">Chỉnh sửa thông tin</Link>
            </li>
            
          </ul>
        </div>
        <div className="member-listcon">
          <form className="form-horizontal center-block">
            <div className="form-group">
              <label
                htmlFor="img"
                className="col-xs-4 col-md-3 col-xl-2 control-label"
              >
                Ảnh đại diện
              </label>
              <div className="col-xs-8 col-sm-8">
                <img
                  src={user.avatar}
                  alt="user.avatar"
                  width="100"
                  className="img-thumbnail"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-xs-4 col-md-3 col-xl-2 control-label">
                Tên người dùng
              </label>
              <div className="col-xs-8 col-md-9 col-xl-10 layer-col-12">
                <p className="form-control-static pt-xs-0">{user.username}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-md-3 col-xl-2 control-label">
                Nhóm người dùng
              </label>
              <div className="col-xs-8 col-md-9 col-xl-10 layer-col-12">
                {/* <p className="form-control-static pt-xs-0">{user.package[0].name}</p> */}
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-md-3 col-xl-2 control-label">
                Thời hạn thành viên
              </label>
              <div className="col-xs-8 col-md-9 col-xl-10 layer-col-12">
                <p className="form-control-static pt-xs-0">
                  {subscriptionExpiration}
                </p>
              </div>
            </div>

            <div className="form-group">
              <label className="col-xs-4 col-md-3 col-xl-2 control-label">
                Địa chỉ Email
              </label>
              <div className="col-xs-8 col-md-9 col-xl-10 layer-col-12">
                <p className="form-control-static pt-xs-0">{user.email}</p>
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-4 col-md-3 col-xl-2 control-label">
                Thời gian đăng ký
              </label>
              <div className="col-xs-8 col-md-9 col-xl-10 layer-col-12">
                <p className="form-control-static pt-xs-0">{user.createdAt}</p>
              </div>
            </div>

            <div className="form-group">
              <label className="col-xs-4 col-md-3 col-xl-2 control-label">
                Điểm tích lũy
              </label>
              <div className="col-xs-8 col-md-9 col-xl-10 layer-col-12">
                <p className="form-control-static pt-xs-0">Điểm_tích_lũy_mẫu</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserPage;
