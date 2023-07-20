const express = require('express');
const dotEnv = require('dotenv');
const dbConection = require('./config/database');
const app = express();
dotEnv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Starting port ${PORT}`);
})
dbConection();