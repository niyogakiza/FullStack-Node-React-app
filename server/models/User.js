const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
//Es6
const { Schema } = mongoose;

// googleId will be String Type
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

//Creating Users collections in model class
mongoose.model('users', userSchema);