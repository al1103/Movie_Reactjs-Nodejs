import React from 'react'

const Orders = () => {
  return (
    <div className="container member-container clearfix">
  <div className="member-right">
    <h2 className="member-title">Lịch sử nạp tiền</h2>
    <div className="member-tab-list">
      <ul className="clearfix">
        <li className="active">Lịch sử nạp tiền trực tuyến</li>
        <li>
          <a href="./cards.html">Lịch sử sử dụng thẻ nạp tiền</a>
        </li>
      </ul>
    </div>
    <table className="table">
      <tbody><tr>
          <td className="hidden-xs" >Số hiệu</td>
          <td>Đơn hàng</td>
          <td className="hidden-xs" >Trạng thái</td>
          <td >Số tiền</td>
          <td >Điểm</td>
          <td className="hidden-xs" >Thời gian</td>
          <td >Hoạt động</td>
        </tr>
        <tr>
          <td className="hidden-xs">$vo.order_id</td>
          <td className="pad">$vo.order_code</td>
          <td className="hidden-xs">
            Đã thanh toán
          </td>
          <td>$vo.order_price</td>
          <td>$vo.order_points</td>
          <td className="hidden-xs">$vo.order_time|mac_day</td>
          <td>
            <a href="{:mac_url('user/pay')}?order_code={$vo.order_code}" className="delete">Thanh toán ngay</a>
          </td>
        </tr>
      </tbody></table>
  </div>
</div>

  )
}

export default Orders