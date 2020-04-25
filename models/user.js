const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin:{
        type: Boolean,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now

    }
});

module.exports = User = mongoose.model('user', UserSchema);