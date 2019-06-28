var express = require("express");
var router = express.Router();
const IndexCtrl = require("../controller/index.controller.js");

/* GET home page. */
router.get("/", IndexCtrl.IndexPage);

router.get("/device", IndexCtrl.DeviceData);

router.get('/deviceAll', IndexCtrl.DeviceDataAll);

router.get("/cellOne", IndexCtrl.CellOwn);

router.get("/cellTwo", IndexCtrl.CellTwo);

router.get("/cellThree", IndexCtrl.CellThree);

router.get("/image", IndexCtrl.ImageData);

router.get("/downloadData", (req, res, next) => {});

router.post("/downloadData", (req, res, next) => {
    const bno = req.query.no || req.body.no || req.param.no || req.params.no;
    const startDate =
        req.query.startCal || req.body.startCal || req.param.startCal || req.params.startCal;
    const endDate =
        req.query.endCal || req.body.endCal || req.param.endCal || req.params.endCal;
    console.log("downloadData");
    console.log("bno ::: " + bno + ", start ::: " + startDate + ", end ::: " + endDate);
    res.send("<script>history.back();</script>");
});

module.exports = router;