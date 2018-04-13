//REQUIRED DEPENDENCIES
require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');


//PORT
const port = 3001;

//APP DECLARATION
const app = express();

//SERVE OUT BUILD FOLDER
app.use(express.static(`${__dirname}/../build`))

//MIDDLEWARES
app.use(cors());
app.use(json());

//SESSION MIDDLEWARE
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000000
    }
  })
);

const path = require("path")
app.get("*", (req, res, next) => {
 res.sendFile(path.join(__dirname, "/../build/index.html"))
})

//USE TO TEST SERVER
// app.get('/api/test', (req, res, next) => {
//   res.json({ message: 'Success' });
// });

//USE TO TEST DB CONNECT
// app.get('/api/test', (req, res, next) => {
//   req.app.get('db')
//   .getTestData()
//   .then(response => {
//     res.status(200).json(response);
//   })
//   .catch(err => res.status(500).json(err));
// });

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});


