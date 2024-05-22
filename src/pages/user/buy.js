import React, { useEffect, useState, useRef } from "react";
import UserLayout from "../../layouts/UserLayout";
import { pointsPay as PointsPay,ApplyCode } from "../../servers/users";
import { getUser,  } from "../../servers/api";
import Loading from "../../components/Loading";
import axios from "axios";



const Buy = () => {
  const right = useRef(null);
  const [loading, setLoading] = useState(false); // Thay đổi thành false ở đây
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const token = localStorage.getItem("token");
  const [pointsPay, setPointsPay] = useState(0);
  const [code , setCode] = useState(0)

  const id = user._id;
  const fetchUser = async () => {
    try {
      const response = await getUser(id, token);
      setUser(response);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };
  useEffect(() => {
  

    fetchUser();
  }, []);

  const handleApplyCode = async (e) => {
    e.preventDefault();
    if (code === "") {
      alert("Vui lòng nhập code (Please enter code)");
      return;
    }
    setLoading(true); // Đặt trạng thái loading là true khi bắt đầu xử lý

    try {
      console.log(code)
      const response = await ApplyCode(token, code);
      if (response.return_code === 1) {
        fetchUser();
        alert("Áp dụng mã code thành công (Apply code successfully)");
      } else {
        alert("Mã code không hợp lệ (Invalid code)");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false); // Đặt trạng thái loading là false khi hoàn tất xử lý
    }
  }
  const handlePointsPay = async (e) => {
    e.preventDefault();
    if (pointsPay < 1) {
      alert(
        "Số tiền nạp tối thiểu là 1000 đồng (Minimum recharge amount is 1000 VND)"
      );
      return;
    }
    if (pointsPay > 1000000) {
      alert(
        "Số tiền nạp tối đa là 1.000.000 đồng (Maximum recharge amount is 1,000,000 VND)"
      );
      return;
    }
    setLoading(true); // Đặt trạng thái loading là true khi bắt đầu xử lý

    const data = {
      pointsPay: pointsPay,
    };

    try {
      const response = await PointsPay(token, data);
      if (response.return_code === 1) {
        const iframe = document.createElement("iframe");
        iframe.src = response.order_url;
        iframe.width = "100%";
        iframe.height = "600";
        right.current.appendChild(iframe);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false); // Đặt trạng thái loading là false khi hoàn tất xử lý
    }
  };
  

  return (
    <UserLayout>
      <div className="container member-container clearfix">
        <div className="member-right" ref={right}>
          {loading && <Loading />}
          {!loading && (
            <div>
              <h2 className="member-title">Nạp điểm</h2>
              <div className="member-tab-list">
                <ul className="clearfix">
                  <li className="ewave-tab active" data-target="#member-buy-1">
                    Nạp trực tuyến
                  </li>
                  <li className="ewave-tab" data-target="#member-buy-2">
                    Nạp thẻ
                  </li>
                </ul>
              </div>
              <form
                className="form-horizontal center-block ewave-form ewave-tab-content mt-10"
                id="member-buy-1"
              >
                <input type="hidden" name="flag" defaultValue="pay" />
                <div className="form-group">
                  <label className="col-xs-4 col-sm-2 control-label">
                    Điểm còn lại
                  </label>
                  <div className="col-xs-8 col-sm-10">
                    <p className="form-control-static pt-xs-0 pt-sm-0">
                      <span className="text-red">{user.points}</span>
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Số tiền nạp</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => setPointsPay(e.target.value)}
                      placeholder="Nhập số tiền cần nạp"
                      autoComplete="off"
                    />
                    <span className="help-block">
                      Số tiền nạp tối thiểu là 1000 đồng, 1 đồng có thể đổi được
                      1 điểm
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" />
                  <div className="col-sm-8">
                    <button
                      type="submit"
                      onClick={handlePointsPay}
                      className="btn member-btn btn-block btn-theme ewave-submit"
                    >
                      Gửi
                    </button>
                  </div>
                </div>
                
              </form>
              <form
                className="form-horizontal center-block ewave-form ewave-tab-content mt-10"
                id="member-buy-1"
              >
                <input type="hidden" name="flag" defaultValue="pay" />
                <div className="form-group">
                  <label className="col-sm-2 control-label">Code</label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Nhập code"
                      autoComplete="off"
                    />
                   
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" />
                  <div className="col-sm-8">
                    <button
                      type="submit"
                      onClick={handleApplyCode}
                      className="btn member-btn btn-block btn-theme ewave-submit"
                    >
                      Gửi
                    </button>
                  </div>
                </div>
                
              </form>
              
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
};

export default Buy;
