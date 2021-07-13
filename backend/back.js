let express = require("express");
let bodyParser = require("body-parser");
let mysql = require("mysql");
let app = express();
let port = 3000;
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "TVShows"
});

con.connect(function (err) {
    if (err) {
        throw err
    }
    console.log("Uspesno konektovan na bazu");
});



app.listen(port, function () {
    console.log("slusa na portu " + port);
});

