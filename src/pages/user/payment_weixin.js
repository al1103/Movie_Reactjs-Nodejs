import React from 'react'

const PaymentWeixin = () => {
  return (
    <div className="container member-container clearfix">
  <div className="member-right">
    <h2 className="member-title">Chuyển khoản qua WeChat trực tuyến</h2>
    <form className="form-horizontal center-block" action="{:mac_url('user/gopay')}" method="post">
      <input type="hidden" name="order_id" defaultValue="{$info.order_id}" />
      <input type="hidden" name="order_code" defaultValue="{$info.order_code}" />
      <div className="form-group">
        <label className="col-xs-4 col-sm-2 control-label">Mã đơn hàng</label>
        <div className="col-xs-8 col-sm-6">
          <p className="form-control-static pt-xs-0 pt-sm-0">{'{'}$order.order_code{'}'}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-xs-4 col-sm-2 control-label">Tổng số tiền</label>
        <div className="col-xs-8 col-sm-6">
          <p className="form-control-static pt-xs-0 pt-sm-0"><span className="text-red">{'{'}$order.order_price{'}'}</span>đồng</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-xs-4 col-sm-2 control-label" />
        <div className="col-xs-8 col-sm-6">
          <p className="form-control-static pt-xs-0 pt-sm-0"><img src="{:mac_url('user/qrcode')}?data={$payment.code_url|urlencode}" width={150} height={150} /></p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-xs-4 col-sm-2 control-label" />
        <div className="col-xs-8 col-sm-6">
          <p className="form-control-static pt-xs-0 pt-sm-0">Mở ứng dụng WeChat và quét mã để thanh toán</p>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}

export default PaymentWeixin