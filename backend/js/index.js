const express = require('express')
const app = express()
let registerFile = require('./loginroutes/handlerSignUp.js')
let loginFile = require("./loginroutes/handlerLogin.js")
let port = 3000;

{//support code
    app.use(express.json());       // to support JSON-encoded bodies
    app.use(express.urlencoded({ extended: false })); // to support URL-encoded bodies 
    app.use(express.static(__dirname));
}

{//database connection
    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'admin@123',
        database: 'my_db',
    })

    connection.connect(function (err) {
        if (!err) {
            console.log("Database is connected ... ");
        } else {
            console.log("ERROR connecting database ..");
            console.log(err);
        }
    });

}


app.post('/signup', (req, res) => registerFile.register(req, res, connection))
app.post('/login', (req, res) => loginFile.login(req, res, connection))


app.listen(port, () => console.log(`Listening on http://localhost:${port}`))