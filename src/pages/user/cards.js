import React from 'react'

const Cards = () => {
  return (
    <div className="container member-container clearfix">
    <div className="member-right">
      <h2 className="member-title">Lịch sử nạp tiền</h2>
      <div className="member-tab-list">
        <ul className="clearfix">
          <li><a href="{:mac_url('user/orders')}">Lịch sử nạp tiền trực tuyến</a></li>
          <li className="active">Lịch sử sử dụng thẻ nạp</li>
        </ul>
      </div>
      <table className="table">
        <tbody><tr>
            <td className="hidden-xs" style={{width: 60}}>Số thứ tự</td>
            <td>Số thẻ</td>
            <td style={{width: 60}}>Mệnh giá</td>
            <td style={{width: 60}}>Điểm</td>
            <td className="hidden-xs" style={{width: 150}}>Thời gian sử dụng</td>
          </tr>
          <tr>
            <td className="hidden-xs">$vo.card_id</td>
            <td className="pad">$vo.card_no</td>
            <td>$vo.card_money</td>
            <td>$vo.card_points</td>
            <td className="hidden-xs">$vo.card_use_time|mac_day</td>
          </tr>
        </tbody></table>
    </div>
  </div>
  
  )
}

export default Cards