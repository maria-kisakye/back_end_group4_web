const express = require('express');
const dotenv = require('dotenv');
const db = require('./config'); 

const authenticate = require('./authenticate');

dotenv.config();
const app = express();
app.use(express.json());

app.use('./authenticate', authenticate);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const sql =
`CREATE TABLE IF NOT EXISTS users (
name VARCHAR(25),
email VARCHAR(50),
password VARCHAR(50),
role ENUM('student', 'president', 'admin')
)`;
db.query(sql, (error,result) => {
    if (error) throw error;
    console.log("Users table created");
});

