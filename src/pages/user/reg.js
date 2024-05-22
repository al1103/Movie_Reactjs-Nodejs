import React from 'react'

const Reg = () => {
  return (
    <div className="member-body">
    <div className="member-bg">
      <div className="container member-container mini-container" style={{paddingTop: 40}}>
        <div className="row">
          <div className="col-sm-3" />
          <h2 className="col-sm-9" style={{marginBottom: 30, fontSize: 24}}><strong>Đăng ký người dùng</strong></h2>
        </div>
      </div>
      <div className="container member-container mini-container">
        <form className="form-horizontal center-block ewave-form" method="post" action="{:mac_url('user/reg')}" data-jump="{:mac_url('user/login')}" autoComplete="off">
          <div className="form-group">
            <label className="col-sm-12 layer-col-12">Tên tài khoản</label>
            <div className="col-sm-12 layer-col-12">
              <input type="text" className="form-control" name="user_name" placeholder="Xin hãy điền tên đăng nhập" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-12 layer-col-12">Mật khẩu</label>
            <div className="col-sm-12 layer-col-12">
              <input type="password" className="form-control" name="user_pwd" placeholder="Xin vui lòng nhập mật khẩu" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-12 layer-col-12">Xác nhận lại mật khẩu</label>
            <div className="col-sm-12 layer-col-12">
              <input type="password" className="form-control" name="user_pwd2" placeholder="Vui lòng xác nhận lại mật khẩu của bạn" />
            </div>
          </div>
          <div className="form-group">
            <input type="hidden" name="ac" defaultValue="phone" />
            <label className="col-sm-12 layer-col-12">Số điện thoại</label>
            <div className="col-sm-12 layer-col-12">
              <div className="input-group">
                <input type="text" className="form-control ewave-to" name="to" placeholder="Vui lòng nhập số điện thoại di động của bạn" autoComplete="off" />
                <span className="input-group-btn">
                  <input type="button" className="btn member-btn btn-theme ewave-send-code" defaultValue="Lấy mã xác minh" data-action="{:mac_url('user/reg_msg')}" />
                </span> </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-12 layer-col-12">Mã xác minh điện thoại di động</label>
            <div className="col-sm-12 layer-col-12">
              <input type="text" className="form-control" name="code" placeholder="Vui lòng nhập mã xác minh bạn nhận được" autoComplete="off" />
            </div>
          </div>
          <div className="form-group">
            <input type="hidden" name="ac" defaultValue="email" />
            <label className="col-sm-12 layer-col-12">Địa chỉ email</label>
            <div className="col-sm-12 layer-col-12">
              <div className="input-group">
                <input type="text" className="form-control ewave-to" name="to" placeholder="Vui lòng nhập email" autoComplete="off" />
                <span className="input-group-btn">
                  <input type="button" className="btn member-btn btn-theme ewave-send-code" defaultValue="Lấy mã xác minh" data-action="{:mac_url('user/reg_msg')}" />
                </span> </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-12 layer-col-12">Mã xác minh email</label>
            <div className="col-sm-12 layer-col-12">
              <input type="text" className="form-control" name="code" placeholder="Vui lòng nhập mã xác minh bạn nhận được" autoComplete="off" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-12 layer-col-12">Mã xác minh hình ảnh</label>
            <div className="col-sm-12 layer-col-12">
              <div className="row">
                <div className="col-xs-6">
                  <input type="text" className="form-control" name="verify" placeholder="Vui lòng nhập mã xác minh ở hình bên phải" autoComplete="off" />
                </div>
                <div className="col-xs-6"><img className="form-control p-0 ewave-verify-img" src="{:mac_url('verify/index')}" alt="Mã xác nhận" title="Bấm để làm mới" /></div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12 layer-col-12">
              <button type="submit" className="btn member-btn btn-block btn-theme bg-theme ewave-submit text-white">Đăng ký ngay</button>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-12 layer-col-12">
              <p className="form-control-static text-center"> <a href="{:mac_url('user/login')}" target="_top"><i className="fa fa-user" />&nbsp;Bạn đã có tài khoản?</a> </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 layer-col-12 other-login-box">
              <h5 className="mt-0">Đăng ký nhanh</h5>
            </div>
          </div></form>
      </div>
    </div>
  </div>
  
  )
}

export default Reg