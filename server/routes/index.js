var express = require('express');
var router = express.Router();
const IndexCtrl = require('../controller/index.controller.js');



/* GET home page. */
router.get('/', IndexCtrl.Index);

router.get('/device', IndexCtrl.DeviceData);

router.get('/cellOne', IndexCtrl.CellOwn);

router.get('/cellTwo', IndexCtrl.CellTwo);

router.get('/cellThree', IndexCtrl.CellThree);

router.get('/image', IndexCtrl.ImageData);

module.exports = router;