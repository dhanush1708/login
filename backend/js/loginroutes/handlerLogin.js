//VALIDATION OF THE FORM
//PASSWORD DECRYPTION

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'Bs@100268',
//     database: 'my_db',
//     insecureAuth: true
// })

// connection.connect(function (err) {
//     if (!err) {
//         console.log("Database is connected ... ");
//     } else {
//         console.log("ERROR connecting database ..");
//         console.log(err);
//     }
// });




exports.login = function (req, res, connection) {
    const password = req.body.password;
    const username = req.body.username;
    console.log("credential recieved.....preparing to VALIDATE from database.....")
    let query = `SELECT username, passwd FROM users where username=?`;
    connection.query(query, username, (err, row, fields) => {
        if (err) {
            console.log(err);
            res.send("-1");
        }
        else {
            if (row[0]) {
                console.log("Logging in.....")
                res.send("1");
            }
            else {
                console.log("Check you credentials")
                res.send("0")
            }
        }
    })


}