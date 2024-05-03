const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username :{
        type :String,
        required : true,
        unique :true
    },
    password :{
        type: String,
        required: true
    },
    roles: {
        type: String,
        enum: ['admin', 'manager', 'member'],
        default: 'member'
    }, 
    active:{
        type :Boolean,
        default:true
    }
},{ timestamps: true });

const User = new mongoose.model('User', UserSchema);

module.exports = User;