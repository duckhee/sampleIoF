var express = require('express');
var router = express.Router();
const IndexCtrl = require('../controller/index.controller.js');


/* GET home page. */
router.get('/', IndexCtrl.Index);

module.exports = router;