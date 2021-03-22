const express = require('express');
const loginManager = require('../authentication/loginManager');
const router = express.Router();

router.post('/', (req, res, next) => {
    loginManager.handleLogin(req.body.username, (err, loginRes) => {
        res.cookie('token', loginRes, { httpOnly: true });
        res.json({ loginRes });
    });
});

module.exports = router;
