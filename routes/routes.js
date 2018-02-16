var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.render('index', { title: 'Car frontend'});
});

router.get("/listcars", (req, res) => {
    res.render('listcars', { title: 'Car List:'});
});

module.exports = router;