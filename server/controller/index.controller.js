const Index = (req, res, next) => {
    console.log("main ctrl");

    res.render('index', {
        title: 'samplePage',
        login: null
    });
};




module.exports = {
    Index
};