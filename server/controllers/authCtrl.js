const Auth0Strategy = require('passport-auth0');

const { CLIENT_ID, CLIENT_SECRET, DOMAIN } = process.env;

const strat = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    callbackURL: '/login',
    scope: 'openid profile'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    done(null, profile);
  }
);

const getUser = (req, res) => {
  if (req.user) res.status(200).json(req.user);
  else res.status(403).json({ message: 'Not Logged In' });
};

const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('http://localhost:3000/#/');
  });
};

module.exports = {
  strat,
  getUser,
  logout
};
