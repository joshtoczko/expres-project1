const express = require('express');
const { get } from '../controllers/users';
const router = Router();

router.route('/:userid')
  .all((req, res, next) => {
    next()
  })
  .get((req, res, next) => {
    get(req.params.userId, (username) => { res.send(username) })
  })
  .post((req, res, next) => {

  })

export default router;
