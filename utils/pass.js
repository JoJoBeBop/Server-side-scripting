'use strict';
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const userModel = require('../models/userModel');

// fake database: ****************
const users = [
  {
    user_id: 1,
    name: 'Foo Bar',
    email: 'foo@bar.fi',
    password: 'foobar',
  },
  {
    user_id: 2,
    name: 'Bar Foo',
    email: 'bar@foo.fi',
    password: 'barfoo',
  },
];

const getUser = (id) => {
  console.log("strat");

  const user = users.filter((usr) => {
    if (usr.user_id === id) {
      return usr;
    }
  });
  return user[0];
};

const getUserLogin = (email) => {
  console.log("strat");

  const user = users.filter((usr) => {
    if (usr.email === email) {
      return usr;
    }
  });
  return user[0];
};
// *****************

// serialize: store user id in session
passport.serializeUser((id, done) => {
  console.log("strat");

  console.log('serialize', id);
  done(null, id);
  // serialize user id by adding it to 'done()' callback
});

// deserialize: get user id from session and get all user data
passport.deserializeUser(async (id, done) => {
  const user = getUser(id);
  done(null, user)
  // get user data by id from getUser
  console.log('deserialize', user);
  // deserialize user by adding it to 'done()' callback
});

// local strategy for username password login
passport.use(new Strategy(
  async (username, password, done) => {
    const params = username;
    console.log(params + "P");
    try {
      const user = await userModel.getUserLogin(params);
      console.log('Local strategy', user); // result is binary row
      if (user === undefined) {
        return done(null, false, {
          message: 'Incorrect email.'
        });
      }
      if (user.password !== password) {
        return done(null, false, {
          message: 'Incorrect password.'
        });
      }
      return done(null, {
        ...user
      }, {
        message: 'Logged In Successfully'
      }); // use spread syntax to create shallow copy to get rid of binary row type
    } catch (err) {
      return done(err);
    }
  }));

module.exports = passport;