let express = require('express');
let router = express.Router();
let request = require('request');

let apiUrl = process.env.APIURL || 'http://localhost:3000/api';

router.get("/", (req, res) => {
    res.render('index', { title: 'Car frontend'});
});

router.get("/listcars", (req, res) => {
  request.get(apiUrl, function(err, res2, body) {  
        let cars = JSON.parse(body);
        res.render('listcars', { cars: cars, title: 'Car frontend'});
    });
});

router.get("/newcar", (req, res) => {
    res.render('newcar');
});

router.post("/newcar", (req, res) => {
    var postBody = {
        url: apiUrl,
        body: JSON.stringify({name: req.body.carname, hp: req.body.carhp}),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    request.post(postBody, function(err, res2, body) {  
        res.redirect('/');
    });
});

module.exports = router;