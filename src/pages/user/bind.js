import React from "react";

const Bind = () => {
  return (
    <div className="container member-container clearfix">
      <div className="member-right">
        <h2 className="member-title">
          <a href="{:mac_url('user/info')}">Sửa thông tin</a>&nbsp;/&nbsp;Đăng
          ký{"{"}if $param.ac == 'phone'{"}"} số điện thoại{"{"}else/{"}"}email
          {"{"}/if{"}"}
        </h2>
        <div className="member-tab-list">
          <ul className="clearfix">
            <li>
              <a href="{:mac_url('user/index')}">Thông tin cơ bản</a>
            </li>
            <li className="active">
              <a href="{:mac_url('user/info')}">Sửa thông tin</a>
            </li>
            <li>
              <a href="{:mac_url('user/popedom')}">Quyền của tôi</a>
            </li>
          </ul>
        </div>
        <div className="member-listcon">
          <form
            className="form-horizontal center-block ewave-form"
            action="{:mac_url('user/bind')}"
            method="post"
            data-jump="{:mac_url('user/info')}"
          >
            <input type="hidden" name="ac" defaultValue="{$param.ac}" />
            <div className="form-group">
              <label className="col-sm-2 control-label">
                {"{"}if $param.ac == 'phone'{"}"}Số điện thoại{"{"}else/{"}"}
                email{"{"}/if{"}"}
              </label>
              <div className="col-sm-8">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control ewave-to"
                    name="to"
                    placeholder="Vui lòng nhập{if $param.ac == 'phone'} số điện thoại{else/} email{/if} của bạn"
                    autoComplete="off"
                  />
                  <span className="input-group-btn">
                    <input
                      type="button"
                      className="btn member-btn btn-theme ewave-send-code"
                      defaultValue="Nhận mã xác nhận"
                      data-action="{:mac_url('user/bindmsg')}"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">
                {"{"}if $param.ac == 'phone'{"}"}Mã xác nhận của điện thoại{"{"}
                else/{"}"}Mã xác nhận của email{"{"}/if{"}"}
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  defaultValue
                  placeholder="Vui lòng nhập mã xác nhận bạn đã nhận được"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" />
              <div className="col-sm-8">
                <button
                  type="submit"
                  className="btn member-btn btn-block btn-theme ewave-submit"
                >
                  Gửi yêu cầu
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bind;
