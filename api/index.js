const express = require('express');
const methodOverride = require('method-override')
const path = require('path')
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors');
const app = express()
const port = 4000;
const config = require('./db')
const router = require('./router')



async function connect() {
  try {
    await mongoose.connect(config.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully" );
  } catch (error) {
    console.error("Connection to MongoDB failed:", error.message);
    process.exit(1); // Exit with failure
  }
}

connect();









// session

var sess = {
  secret: 'zilong-zhou',
  cookie: {}
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session(sess))





app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(cors());

router(app)





app.listen(port)