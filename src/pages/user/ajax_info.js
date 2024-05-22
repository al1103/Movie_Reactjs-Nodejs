<div className="container mini-container" style={{minWidth: 300}}>
  <form className="form-horizontal center-block">
    <div className="form-group">
      <label className="col-xs-4 control-label">Tên người dùng</label>
      <div className="col-xs-8">
        <p className="form-control-static">{'{'}$user.user_name{'}'}</p>
      </div>
    </div>
    <div className="form-group">
      <label className="col-xs-4 control-label">Nhóm thành viên</label>
      <div className="col-xs-8">
        <p className="form-control-static">{'{'}$user.group.group_name{'}'}</p>
      </div>
    </div>
    <div className="form-group">
      <label className="col-xs-4 control-label">Thời gian hết hạn</label>
      <div className="col-xs-8">
        <p className="form-control-static">{'{'}$user.user_end_time|mac_day{'}'}</p>
      </div>
    </div>
    <div className="form-group">
      <label className="col-xs-4 control-label">Điểm còn lại</label>
      <div className="col-xs-8">
        <p className="form-control-static">{'{'}$user.user_points{'}'}</p>
      </div>
    </div>
    <div className="form-group">
      <label className="col-xs-4 control-label">Lần đăng nhập cuối cùng</label>
      <div className="col-xs-8">
        <p className="form-control-static text-nowrap">{'{'}$obj.user_last_login_time|mac_day=color{'}'}</p>
      </div>
    </div>
    <div className="form-group">
      <div className="col-xs-12">
        <p className="form-control-static text-center">
          <a href="{:mac_url('user/index')}" target="_top"><i className="fa fa-user" />&nbsp;Đến trung tâm thành viên</a>&nbsp;&nbsp;
          <a href="{:mac_url('user/logout')}" target="_top"><i className="fa fa-sign-out fa-rotate-180" />&nbsp;Đăng xuất</a>
        </p>
      </div>
    </div>
  </form>
</div>
