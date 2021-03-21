const express = require('express');
const usrController = require('../controllers/users');
const router = express.Router();

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
