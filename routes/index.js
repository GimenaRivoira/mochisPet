var express = require('express');
var router = express.Router();
const {getAll} = require('../controller/productsController')

/* GET home page. */
router.get('/:id', getAll);

module.exports = router;
