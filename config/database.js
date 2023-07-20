const mongoose = require('mongoose');
const dotEnv = require('dotenv');
dotEnv.config();
const dbConection = () => {
    mongoose
    .connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>{
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Error connecting');
        console.error(err.message);
        process.exit(1);
    })
}

module.exports = dbConection;