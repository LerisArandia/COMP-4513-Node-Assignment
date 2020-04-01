require('dotenv').config();
// console.log(process.env.MONGO_URL);

const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

// const connect = () => {
//    const db = mongoose.connection;
//    db.on('error', console.error.bind(console, 'connection error:'));
//    db.once('open', function callback () {
//       console.log("connected to MongoDB Atlas");
//    });
// };

const connect = () => {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback() {
        console.log("connected to mongo");
    });
};

module.exports = {
    connect
};