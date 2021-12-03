const express = require('express');
const router = express.Router();
// const reviews = require('../data/reviews');


router.get('/', async (req, res) => {
  const userData = req.session.user;
  console.log(userData)


  res.render('posts/private', {
    username: req.session.user.username,
    firstname: userData.firstname,
    lastname: userData.lastname,
    email: userData.email,
    age: userData.age



  });
});

module.exports = router;
