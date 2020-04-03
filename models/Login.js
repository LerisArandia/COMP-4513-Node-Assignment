const mongoose = require('mongoose');

// define a schema that maps to the structure of the data in MongoDB
const loginsSchema = new mongoose.Schema({
    id: Number,
    details: {
        firstname: String,
        lastname: String,
        city: String,
        country: String
    },
    picture: {
        large: String,
        thumbnail: String
    },
    membership: {
        date_joined: Date,
        "last-update": Date,
        likes: Number
    },
    email: String,
    password_bcrypt: String,
    apikey: String,
    favorites: Array
})

loginsSchema.methods.isValidPassword = async function (formPassword) {
    const user = this;
    const hash = user.password;
    // Hashes the password sent by the user for login and checks if the
    // digest stored in the database matches the one sent. Returns true
    // if it does else false.
    const compare = await bcrypt.compare(formPassword, hash);
    return compare;
}

module.exports = mongoose.model('Login', loginsSchema, 'logins');