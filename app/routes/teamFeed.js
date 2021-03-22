const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json([
        {
            event: {
                id: '1',
                title: 'Title (3/22/2021 1:34pm)',
                message: 'New update coming soon!'
            }
        },
        {
            event: {
                id: '2',
                title: 'Title2 (3/22/2021 9:23am)',
                message: 'New team member has joined!'
            }
        }]);
})

module.exports = router;