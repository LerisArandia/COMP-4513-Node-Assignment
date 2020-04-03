const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define a schema that maps to the structure of the data in MongoDB
const userSchema = new mongoose.Schema({
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
        date_joined: String,
        last_update: String,
        likes: Number
    },
    email: String,
    password: String,
    apikey: String,
    favorites: Array
});

userSchema.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

//We'll use this later on to make sure that the user trying to log in has the correct credentials
userSchema.methods.isValidPassword = function (formPassword) {
    const user = this;
    const hash = user.password;
    console.log(this.password);
    // Hashes the password sent by the user for login and checks if the
    // digest stored in the database matches the one sent. Returns true
    // if it does else false.
    return bcrypt.compareSync(formPassword, this.password);
}

module.exports = mongoose.model('User', userSchema, 'users');