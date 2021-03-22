const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        event: {
            title: 'Title',
            message: 'New update coming soon!'
        }
    });
})