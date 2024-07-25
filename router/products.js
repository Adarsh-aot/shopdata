const express = require('express');
const product = require('../helper/products');
const router = express.Router();


router.post('/' ,  product.product_add)
router.get('/', product.display );
router.get('/:id', product.displaybyid );                   
router.delete('/:id', product.deletebyid );
router.put('/:id', product.update );
router.put('/quatity/update/:id', product.update_quantity );


module.exports = router;