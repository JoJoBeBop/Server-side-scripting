'use strict';
const passport = require('passport');

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
  console.log(email);

  console.log(users);

  const user = users.filter((usr) => {
    if (usr.email === email) {
      console.log( usr);
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



module.exports = {
  users, getUserLogin
};