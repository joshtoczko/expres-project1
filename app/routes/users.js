const express = require('express');
const usrController = require('../controllers/users');
const router = express.Router();

// Failed options request
// router.route('/')
//   .all((req, res, next) => {
//     next()
//   })
//   .get((req, res, next) => {
//     res.send(404)
//   })
//   .post((req, res, next) => {

//   });

router.post('/', (req, res, next) => {
  usrController.create(req.body, (message) => {
    res.send(message);
  })
})

router.get('/id/:userid', (req, res, next) => {
  usrController.get(req.params.userid, (username) => {
    res.send(username);
  })
})

router.get('/username/:username', (req, res, next) => {
  usrController.exists(req.params.username, (user) => {
    res.send(user);
  })
})

module.exports = router;
