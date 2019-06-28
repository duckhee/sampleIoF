const getReq = require('request');

const IndexPage = (req, res, next) => {
    console.log("main ctrl");

    res.render('reindex', {
        title: 'samplePage',
        login: null
    });
};

const CellOwn = (req, res, next) => {
    console.log('cell own ctrl');

    res.render('cellone', {
        title: 'cell1 page',
        login: null
    });
};


const CellTwo = (req, res, next) => {
    res.render('celltwo', {
        title: 'cell2 page',
        login: null
    });
};


const CellThree = (req, res, next) => {
    res.render('cellthree', {
        title: 'cell3 page',
        login: null
    });
};

const DeviceData = (req, res, next) => {
    var no = req.query.no || req.params.no || req.param.no || req.body.no;

    getReq('http://www.iof.center/DataValue/getDeviceList10?no=' + no, (err, response, body) => {
        console.log("no :::::::::::::: " + no);
        console.log("response", typeof (body));
        res.send(body);
    });
};

const DeviceDataAll = (req, res, next) => {
    var no = req.query.no || req.param.no || req.params.no;
    console.log('device all data get');
    getReq('http://www.iof.center/DataValue/getDeviceListAll?no=' + no, (err, response, body) => {
        if (err) {
            console.log('error code ::::: ' + err.code);
            console.log('error ::::: ' + err);
        }
        console.log('response', typeof (body));
        console.log("no :::::::::::::: " + no);
        res.send(body);
    });
};

const ImageData = (req, res, next) => {
    var no = req.query.no || req.params.no || req.param.no || req.body.no;
    getReq("http://www.iof.center/DataValue/DeviceImageGet?no=" + no, (err, response, body) => {
        console.log("no :::::::::::::: " + no);
        res.send(body);
    });
};

module.exports = {
    IndexPage,
    CellOwn,
    CellTwo,
    CellThree,
    DeviceData,
    DeviceDataAll,
    ImageData
};