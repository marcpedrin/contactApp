const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    contact:{
        type: Number,
        required: true
    }


})


module.exports = mongoose.model('Test', schema)
