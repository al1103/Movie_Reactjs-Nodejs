import React from 'react'

const Footer = () => {
  return (
    <div className="bottom">
          <div className="container">
            <p className="hidden-xs">
              
              <a href="{:mac_url('label/new')}">Phim mới</a> <i>|</i>
              <a href="{:mac_url('map/index')}">Sơ đồ trang</a> <i>|</i>
              <a href="{:mac_url('rss/index')}">Rss</a> <i>|</i>
              <a href="{:mac_url('rss/baidu')}">Rss Baidu</a> <i>|</i>
              <a href="{:mac_url('rss/google')}">Rss Google</a> <i>|</i>
              <a href="{:mac_url('rss/bing')}">Rss Bing</a> <i>|</i>
              <a href="{:mac_url('rss/so')}">Rss So</a> <i>|</i>
              <a href="{:mac_url('rss/sogou')}">Rss Sogou</a> <i>|</i>
              <a href="{:mac_url('rss/sm')}">Rss Sm</a>
            </p>
            <p>
              Tất cả phim và hình ảnh trên trang web được sưu tầm từ Internet,
              bản quyền thuộc về tác giả gốc, chúng tôi chỉ cung cấp dịch vụ
              phát lại, không cung cấp kho lưu trữ phim và không tham gia ghi
              hình.
            </p>
            <p>
              Copyright © :date(Y)  $maccms.site_name (
              $maccms.site_url ) All Rights Reserved
            </p>
          </div>
          <div className="ewave-banner-box float-bottom clearfix hidden-lg hidden-xl hidden-xxl ewave-remove-box">
            <div
              className="ewave-banner-wrapper ewave-remove-list"
              id="float-bottom"
            />
            <a className="ewave-banner-close">
              <i className="fa fa-close" />
            </a>
          </div>
          <div className="bottom-placeholder" />
        </div>

  )
}

export default Footer