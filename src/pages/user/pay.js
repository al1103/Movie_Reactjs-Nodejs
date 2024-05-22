import React from 'react'

const Pay = () => {
  return (
    <div className="container member-container clearfix">
  <div className="member-right">
    <h2 className="member-title"><a href="{:mac_url('user/buy')}">Nạp điểm</a>&nbsp;/&nbsp;Thanh toán đơn hàng</h2>
    <form className="form-horizontal center-block" action="{:mac_url('user/gopay')}" method="post" target="_blank">
      <input type="hidden" name="order_id" defaultValue="{$info.order_id}" />
      <input type="hidden" name="order_code" defaultValue="{$info.order_code}" />
      <div className="form-group">
        <label className="col-xs-4 col-sm-2 control-label">Mã đơn hàng</label>
        <div className="col-xs-8 col-md-6 col-lg-8 col-xl-6">
          <p className="form-control-static pt-xs-0 pt-sm-0">{'{'}$info.order_code{'}'}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-xs-4 col-sm-2 control-label">Số tiền đơn hàng</label>
        <div className="col-xs-8 col-md-6 col-lg-8 col-xl-6">
          <p className="form-control-static pt-xs-0 pt-sm-0"><span className="text-red">{'{'}$info.order_price{'}'}</span>đồng</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label">Phương thức thanh toán</label>
        <div className="col-sm-8 col-md-6 col-lg-8 col-xl-6">
          <select className="form-control" name="payment" id="payment" data-tip="Vui lòng chọn phương thức thanh toán">
            <option value="codepay">Thanh toán CodePay</option>
            <option value="zhapay">Thanh toán ZhaPay</option>
          </select>
        </div>
      </div>
      <div className="form-group" id="paytype_box" style={{display: 'none'}}>
        <label className="col-sm-2 control-label">Loại thanh toán</label>
        <div className="col-sm-8 col-md-6 col-lg-8 col-xl-6">
          <select className="form-control" id="paytype" name="paytype">
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className="col-sm-2 control-label" />
        <div className="col-sm-8 col-md-6 col-lg-8 col-xl-6">
          <button type="submit" className="btn member-btn btn-block btn-theme ewave-submit">Xác nhận</button>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}

export default Pay