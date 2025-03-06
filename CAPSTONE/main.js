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
Student VARCHAR(25),
