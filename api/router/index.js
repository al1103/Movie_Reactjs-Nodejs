const siteRouter = require("./site");
const authRouter = require("./auth");
const usersRouter = require("./users");

const authenToken = require("../controller/middlewareToken");

function authorize(roles) {
  return (req, res, next) => {
    if (roles.includes(req.userRole)) {
      next();
    } else {
      return res.status(403).json({ error: "Unauthorized" }); 
    }
  };
}

function routes(app) {
  app.use("/auth", authenToken,  authorize(["admin"]) , authRouter);
  app.use("/users",  usersRouter);
  app.use("/",   siteRouter);


  
}

module.exports = routes;
