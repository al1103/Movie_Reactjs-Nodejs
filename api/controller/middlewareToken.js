const jwt = require('jsonwebtoken');

function authenToken(req, res, next) {
  const authorizationClient = req.headers["authorization"];

  const token = authorizationClient && authorizationClient.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Invalid Token" }); // English error message
  }

  try {
    if (!process.env.ACCESS_TOKEN_SECRET) {
      throw new Error("Missing ACCESS_TOKEN_SECRET environment variable");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const userRole = decodedToken.role;
    if (userRole === "admin") {
      // Quản trị viên (admin) được phép truy cập
      req.userRole = "admin";
    } else if (userRole === "user") {
      // Người dùng (user) được phép truy cập
      req.userRole = "user";
    } else {
      return res.status(403).json({ error: "Unauthorized role" }); // Specific error
    }

    next();
  } catch (e) {
    if (e.name === "JsonWebTokenError") {
      return res.status(403).json({ error: "Invalid token signature" });
    } else {
      // Handle other errors
      console.error(e);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = authenToken;
