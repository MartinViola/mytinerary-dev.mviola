const mongoose = require('mongoose')

const itinerariesSchema = new mongoose.Schema({
    city_id: {type: String, required:true}, //mongoose.Types.ObjectId, ref:"cities"
    city: {type: String, required:true},
    itinerary: {type: String, required:true},
    duration: {type: String, required:true},
    price: {type: Number, required:true},
    creator: {type: String, required:true},
    creatorImage: {type: String, required:true},
    likes: {type: Number, required:true},
    hastags: {type: Array, required:true}
})

const Itineraries = mongoose.model('itineraries', itinerariesSchema)
module.exports = Itineraries