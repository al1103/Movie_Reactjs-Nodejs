import React, { useEffect, useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import { Button } from "antd";
import { getFavorite } from "../../servers/users";

const Favs = () => {
  const [fav, setFav] = useState([]);

    useEffect(() => {
      const token = localStorage.getItem("token");
      const getFavorites = async () => {
        try {
          if (token) {
            const res = await getFavorite(token);
            setFav(res.data);
          } 
        } catch (error) {
          console.error("Error fetching favorites:", error);
        }
      }
      getFavorites()
    }, []);
    console.log(fav);
  return (
    <UserLayout>
      <div className="container member-container clearfix">
        <div className="member-right">
          <h2 className="member-title">Danh sách yêu thích của tôi</h2>
          <form className="form-horizontal center-block">
            <input type="hidden" name="type" defaultValue={2} />
            <div className="member-function-box">
              <Button>Chọn tất cả</Button>

              <Button
                className="member-delete"
                data-tip="Bạn có chắc muốn xóa các bản ghi yêu thích đã chọn không?"
              >
                Xóa
              </Button>

              <Button
                className="member-clear"
                data-tip="Bạn có chắc muốn xóa toàn bộ danh sách yêu thích không?"
              >
                Xóa tất cả
              </Button>
            </div>
            <ul className="member-data">
              {
                fav.map(( item) => {
                  return (
                    <li className="member-data-item clearfix" key={item.slug}>
                      <div className="items">
                        <input type="checkbox" name="ids[]" />
                        <div className="image-movie">
                          <img
                            className="image"
                            src={item.thumb_url}
                            alt=""
                          />
                        </div>
                        <div className="member-data-info">
                          <h4>
                            <a href="#" target="_blank" className="d-block">
                              {item.name}
                            </a>
                            <small>{item.slug}</small>
                          </h4>
                        </div>
                      </div>
                      <div className="member-data-deletebox">
                        <button className="member-data-delete member-delete-one">
                          <i className="fa fa-trash-o"></i>
                          <span className="hidden-xs hidden-sm">&nbsp;Xóa</span>
                        </button>
                      </div>
                    </li>
                  )
                })
              }
              
            </ul>
          </form>

          <div className="member-empty text-center">
            <i className="fa fa-minus-circle" />
            &nbsp;Không có bản ghi nào
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default Favs;
