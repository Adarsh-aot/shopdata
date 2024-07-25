const express = require('express');
const { order } = require('../helper/orderbuy');
const router = express.Router();

router.post('/', order );

module.exports = router;
