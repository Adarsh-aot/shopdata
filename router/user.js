const express = require('express');
const { add, update, display, displaybyid, deletebyid } = require('../helper/user');

const router = express.Router();


router.post('/', add );

router.put('/:id', update );  


router.get('/', display);

router.get('/:id', displaybyid );


router.delete('/:id', deletebyid);

module.exports = router;