import React from 'react'

const Cash = () => {
  return (
    <div className="container member-container clearfix">
  <div className="member-right">
    <h2 className="member-title">Rút tiền từ điểm</h2>
    <div className="member-tab-list">
      <ul className="clearfix">
        <li className="ewave-tab active" data-target="#member-cash-1">Yêu cầu rút tiền</li>
        <li className="ewave-tab" data-target="#member-cash-2">Lịch sử rút tiền</li>
      </ul>
    </div>
    <form className="form-horizontal center-block ewave-form ewave-tab-content mt-10" id="member-cash-1" action="{:mac_url('user/cash')}" method="post" data-jump="refresh-wait">
      <div className="form-group">
        <label className="col-xs-4 col-sm-2 control-label">Điểm còn lại</label>
        <div className="col-xs-8 col-xl-6">
          <p className="form-control-static pt-xs-0 pt-sm-0"><span className="text-red">{'{'}$GLOBALS['user']['user_points']{'}'}</span> (Tương đương <span className="text-red">{'{'}$GLOBALS['user']['user_points']/$GLOBALS['config']['user']['cash_ratio']{'}'}</span> VNĐ)</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-xs-4 col-sm-2 control-label">Điểm đang chờ rút</label>
        <div className="col-xs-8 col-xl-6">
          <p className="form-control-static pt-xs-0 pt-sm-0"><span className="text-red">{'{'}$GLOBALS['user']['user_points_froze']{'}'}</span> (Tương đương <span className="text-red">{'{'}$GLOBALS['user']['user_points_froze']/$GLOBALS['config']['user']['cash_ratio']{'}'}</span> VNĐ)</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">Tên ngân hàng</label>
        <div className="col-sm-8 col-xl-6">
          <input type="text" name="cash_bank_name" className="form-control" placeholder="Nhập tên ngân hàng hoặc ví điện tử" defaultValue />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">Số tài khoản</label>
        <div className="col-sm-8 col-xl-6">
          <input type="text" name="cash_bank_no" className="form-control" placeholder="Nhập số tài khoản ngân hàng hoặc ví điện tử" defaultValue />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">Tên người nhận</label>
        <div className="col-sm-8 col-xl-6">
          <input type="text" name="cash_payee_name" className="form-control" placeholder="Nhập tên người nhận tương ứng với tài khoản ở trên" defaultValue />
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">Số tiền rút</label>
        <div className="col-sm-8 col-xl-6">
          <input type="text" name="cash_money" className="form-control" placeholder="Nhập số tiền muốn rút" defaultValue />
          <span className="help-block">1 VNĐ tương đương với <span className="text-red">{'{'}$GLOBALS['config']['user']['cash_ratio']{'}'}</span> điểm, số tiền rút tối thiểu là: <span className="text-red">{'{'}$GLOBALS['config']['user']['cash_min']{'}'}</span> VNĐ</span>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label" />
        <div className="col-sm-8 col-xl-6">
          <button type="submit" className="btn member-btn btn-block btn-theme ewave-submit">Gửi yêu cầu</button>
        </div>
      </div>
    </form>
    <div className="member-empty text-center"><i className="fa fa-warning" />&nbsp;Trang web hiện không mở chức năng rút tiền từ điểm</div>
    <div className="ewave-tab-content mt-10" id="member-cash-2" style={{display: 'none'}}>
      <form className="form-horizontal center-block" action="{:mac_url('user/cash_del')}">
        <div className="member-function-box">
          <a href="javascript:;" onclick="MAC.CheckBox.All('ids[]');">Chọn tất cả</a>
          <a href="javascript:;" onclick="MAC.CheckBox.Other('ids[]');">Chọn ngược lại</a>
          <a className="member-delete" href="javascript:;" data-tip="Bạn có chắc muốn xóa các dòng đã chọn không?" data-all={0}>Xóa</a>
          <a className="member-clear" href="javascript:;" data-tip="Bạn có chắc muốn xóa tất cả lịch sử rút tiền không?" data-all={1}>Xóa tất cả</a>
        </div>
        <table className="table">
          <tbody><tr>
              <td style={{width: 66}}>Chọn</td>
              <td className="hidden-xs" style={{width: 80}}>Số thứ tự</td>
              <td style={{width: 100}}>Số điểm rút</td>
              <td style={{width: 100}}>Số tiền rút</td>
              <td style={{width: 100}}>Trạng thái</td>
              <td className="hidden-xs" style={{width: 140}}>Thời gian</td>
              <td style={{width: 100}}>Thao tác</td>
            </tr>
            <tr>
              <td><input type="checkbox" name="ids[]" defaultValue="{$vo.cash_id}" /></td>
              <td className="hidden-xs">{'{'}$vo.cash_id{'}'}</td>
              <td>{'{'}$vo.cash_points{'}'}</td>
              <td>{'{'}$vo.cash_money{'}'}</td>
              <td>{'{'}if condition="$vo.cash_status eq '1'"{'}'}Đã kiểm duyệt{'{'}else/{'}'}Chưa kiểm duyệt{'{'}/if{'}'}</td>
              <td className="hidden-xs">{'{'}$vo.cash_time|mac_day{'}'}</td>
              <td><a href="javascript:;" className="member-delete-one" data-tip="Bạn có chắc muốn xóa dòng này không?" data-all={0} data-id="{$vo.cash_id}">Xóa</a></td>
            </tr>
          </tbody></table>
      </form>
    </div>
  </div>
</div>

  )
}

export default Cash