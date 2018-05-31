require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');

const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);
const { getAllProducts } = require(`${__dirname}/controllers/productCtrl`);
const {
  getCart,
  addToCart,
  deleteFromCart,
  changeQuantity
} = require(`${__dirname}/controllers/cartCtrl`);

const port = process.env.PORT || 3001;

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(console.log);

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000
    }
  })
);

app.use((req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  next();
});

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  const db = app.get('db');
  db
    .getUserByAuthid([user.id])
    .then(response => {
      if (!response[0]) {
        db
          .addUserByAuthid([user.displayName, user.id])
          .then(res => done(null, res[0]))
          .catch(console.log);
      } else return done(null, response[0]);
    })
    .catch(console.log);
});

passport.deserializeUser((user, done) => done(null, user));

app.get('/api/product', getAllProducts);

app.get('/api/cart', getCart);
app.post('/api/cart', addToCart);
app.delete('/api/cart/:id', deleteFromCart);
app.put('/api/cart/:id', changeQuantity);

app.get(
  '/login',
  passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: '/login'
  })
);

app.get('/api/me', getUser);
app.get('/logout', logout);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
