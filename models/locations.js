const mongoose = require('mongoose')

const locationsSchema = new mongoose.Schema({
    name:{type: String, required:true},
    country:{type: String, required:true},
    image: {type: String, required:true},
})

const Locations = mongoose.model('cities', locationsSchema)
module.exports = Locations