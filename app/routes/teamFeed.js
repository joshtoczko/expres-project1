const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json([
        {
            event: {
                title: 'Title',
                message: 'New update coming soon!'
            }
        },
        {
            event: {
                title: 'Title2',
                message: 'New team member has joined!'
            }
        }]);
})

module.exports = router;