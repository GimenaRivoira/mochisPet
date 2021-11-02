var express = require('express');
var router = express.Router();
const {getAll, getOne, create, edit, remove} = require('../controller/userController');

/* GET home page. */
router.get('/', getAll);
router.get('/:id', getOne);
router.post('/create', create);
router.put('/edit/:id', edit);
router.delete('/delete/:id', remove);

module.exports = router;
