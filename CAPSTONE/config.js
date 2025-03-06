const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "csechapters"
});
db.connect((error) => {
    if(error) throw error;
    console.log("Connected to database")
})
module.exports = db;
