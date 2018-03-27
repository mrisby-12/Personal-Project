//REQUIRED DEPENDENCIES
require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const path = require('path');

//CONNECT TO DB W/MASSIVE
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => console.log(err));
  

//PORT
const port = 3001;

//APP DECLARATION
const app = express();

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


