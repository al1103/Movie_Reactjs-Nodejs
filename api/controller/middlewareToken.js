const jwt = require('jsonwebtoken');

function authenToken(req, res, next) {
  const authorizationClient = req.headers["authorization"];
  const token = authorizationClient && authorizationClient.split(" ")[1];

  if (!token) return res.status(401).json({ error: " Token khong hop le" });

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userRole = decodedToken.role;

    if (userRole === "admin") {
      // Quản trị viên (admin) được phép truy cập
      req.userRole = "admin";
    } else if (userRole === "user") {
      // Người dùng (user) được phép truy cập
      req.userRole = "user";
    } else {
      return res.sendStatus(403); // Trường hợp khác không được phép truy cập
    }

    next();
  } catch (e) {
    return res.sendStatus(403); // Token không hợp lệ
  }
}

module.exports = authenToken;
