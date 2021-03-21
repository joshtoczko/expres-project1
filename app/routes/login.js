const express = require('express');
// const usrController = require('../controllers/users');
const router = express.Router();

router.post('/', (req, res, next) => {
    usrController.create(req.body, (message) => {
        res.send(message);
    })
});
