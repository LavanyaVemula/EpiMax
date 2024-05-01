const mongoose = require('mongoose')
const { type } = require('os')
const employeeSchema = new mongoose.Schema({
    // name, email, phone, city
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        default : false
    },
    city : {
        type : String
    }
})
module.exports = mongoose.model('Employee', employeeSchema)