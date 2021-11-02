var express = require('express');
var router = express.Router();
const {getAll, getOne, create, remove} = require('../controller/productsController')

/* GET home page. */
router.get('/', getAll);
router.get('/:id', getOne);
router.post('/create', create);
router.delete('/delete/:id', remove);

module.exports = router;
