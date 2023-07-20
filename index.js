const express = require('express');
const dotEnv = require('dotenv');
const dbConection = require('./config/database');
const todoRouter = require('./router/Todo');
const app = express();
app.use(express.json());
app.use('/api/v1', todoRouter);
dotEnv.config();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Starting port ${PORT}`);
})
app.get('/', (req, res) => {
    res.send('Hello guys');
})
dbConection();
