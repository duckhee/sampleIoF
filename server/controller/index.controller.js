const Index = (req, res, next) => {
    console.log("main ctrl");

    res.render('index');
};




module.exports = {
    Index
};