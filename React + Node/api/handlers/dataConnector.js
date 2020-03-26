require('dotenv').config();
console.log(process.env.MONGO_URL);

const mongoose = require('mongoose');

const connect = () => {
    const opt = { useUnifiedTopology: true, useNewUrlParser: true };

    mongoose.connect(process.env.MONGO_URL, opt);

    const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function callback () {
            console.log("connected to mongo");
        });
};

module.exports = { connect };