Video Demo : https://youtu.be/oDpxz1HKym8?si=vTZJmtbYgI8DeQ_E 


## Hướng dẫn cài đặt và chạy ứng dụng

**Cài đặt:**

1. **Node.js:** Cài đặt Node.js phiên bản 16.14.0 trở lên. Bạn có thể tải xuống từ trang web chính thức: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

2. **Thư viện phụ thuộc:** Cài đặt các thư viện phụ thuộc bằng cách chạy lệnh sau trong terminal:

```
npm install
```

**Chạy ứng dụng:**

**API:**

1. **Mở thư mục:** Mở thư mục `api` trong terminal.
```
cd api
```

2. **Chạy ứng dụng:** Chạy ứng dụng Node.js bằng lệnh sau:

```
node index
```

**Giao diện người dùng (ReactJS):**

1. **Khởi động ứng dụng:** Chạy lệnh sau trong terminal để khởi động ứng dụng ReactJS:

```
npm start
```

**Lưu ý:**

* **Cài đặt công cụ:** Đảm bảo bạn đã cài đặt các công cụ cần thiết như Node.js, npm và React CLI trước khi chạy ứng dụng.
* **Mở ứng dụng ReactJS:** Sau khi khởi động thành công, mở ứng dụng ReactJS trong trình duyệt web.

**Cài đặt MongoDB:**

1. **Tải xuống:** Tải xuống MongoDB từ trang web chính thức: [https://www.mongodb.com/download-center](https://www.mongodb.com/download-center)

2. **Cài đặt:** Cài đặt MongoDB theo hướng dẫn trong trình cài đặt.

3. **Khởi động:** Khởi động dịch vụ MongoDB bằng lệnh sau trong terminal:

```
mongod
```

**Tạo Database và import dữ liệu:**

1. **Mở MongoDB Compass:** Mở MongoDB Compass, một công cụ quản lý GUI cho MongoDB.

2. **Tạo Database:** Tạo một Database mới với tên "Movie".

3. **Import dữ liệu:** Trong MongoDB Compass, chọn Database "Movie" và import dữ liệu từ thư mục `Mongodb` vào các collection tương ứng: `comments`, `movies`, `users`.

**Lưu ý:**

* **Định dạng dữ liệu:** Dữ liệu cần được định dạng ở dạng JSON.
* **Tên collection:** Đảm bảo tên collection khớp với tên trong mã nguồn ứng dụng.
