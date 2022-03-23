const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    activityName: {type: String},
    activityDescription: {type: String},
    activityImage: {type: String},
    itineraryId: {type: String}, //{type: mongoose.Types.ObjectId, ref:"itineraries"}
})

const Activity = mongoose.model('activities', activitySchema)
module.exports = Activity