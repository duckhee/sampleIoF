var express = require('express');
var router = express.Router();
const IndexCtrl = require('../controller/index.controller.js');
const getReq = require('request')


/* GET home page. */
router.get('/', IndexCtrl.Index);

router.get('/device', (req, res, next) => {
    var no = req.query.no || req.params.no || req.param.no || req.body.no;
    getReq('http://www.iof.center/DataValue/getDeviceList10?no=' + no, (err, response, body) => {
        console.log("response", body);
        res.json(body);
    });
});

module.exports = router;