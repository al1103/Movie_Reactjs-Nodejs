import React from "react";

const Plays = () => {
  return (
    <div className="container member-container clearfix">
      <div className="member-right">
        <h2 className="member-title">Lịch sử phát</h2>
        <form
          className="form-horizontal center-block"
          action="{:mac_url('user/ulog_del')}"
        >
          <input type="hidden" name="type" defaultValue={4} />
          <div className="member-function-box">
            <a href="javascript:;" onclick="MAC.CheckBox.All('ids[]');">
              Chọn tất cả
            </a>
            <a href="javascript:;" onclick="MAC.CheckBox.Other('ids[]');">
              Chọn ngược lại
            </a>
            <a
              className="member-delete"
              href="javascript:;"
              data-tip="Bạn có chắc chắn muốn xóa các bản ghi phát đã chọn không?"
              data-all={0}
            >
              Xóa
            </a>
            <a
              className="member-clear"
              href="javascript:;"
              data-tip="Bạn có chắc chắn muốn xóa toàn bộ lịch sử phát không?"
              data-all={1}
            >
              Xóa toàn bộ
            </a>
          </div>
          <ul className="member-data">
            <li className="member-data-item clearfix">
              <div className="member-data-checkbox">
                <input
                  type="checkbox"
                  name="ids[]"
                  defaultValue="{$vo.ulog_id}"
                />
              </div>
              <div className="member-data-infobox clearfix">
                <div className="member-data-cover">
                  <a
                    className="img-wrapper lazyload"
                    data-original="{$vo.data.pic}"
                    href="{$vo.data.link}"
                    target="_blank"
                  />
                </div>
                <div className="member-data-info">
                  <h4>
                    <a href="{$vo.data.link}" target="_blank">
                      $vo.data.type_name $vo.data.name
                    </a>
                    <small>[$vo.ulog_rid-$vo.ulog_sid- $vo.ulog_nid]</small>
                  </h4>
                  <p>Loại: $vo.data.type.type_name</p>
                  <p>
                    Điểm:{" "}
                    <strong className="text-theme">$vo.ulog_points</strong>
                  </p>
                  <p>Thời gian: $vo.ulog_time|mac_day</p>
                </div>
              </div>
              <div className="member-data-deletebox">
                <a
                  className="member-data-delete member-delete-one"
                  data-tip="Bạn có chắc chắn muốn xóa bản ghi này không?"
                  data-all={0}
                  data-id="{$vo.ulog_id}"
                >
                  <i className="fa fa-trash-o" />
                  <span className="hidden-xs">&nbsp;Xóa</span>
                </a>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Plays;
