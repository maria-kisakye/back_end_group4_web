const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
