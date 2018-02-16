require('dotenv').config()

let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');

var port = process.env.PORT || 8000;

app.use(require('./routes/routes.js'));

app.listen(port, (param) => {
    console.log("App started : http://localhost:"+port);
})