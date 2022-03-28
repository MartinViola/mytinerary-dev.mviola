const Activity = require('../models/activity')

const activitiesController = {
    obtainAllActivitiesForOneItinerary: async(req,res)=>{
        try{
            const activitiesOfItinerary = await Activity.find({itineraryId:req.params.itineraryId})
            res.json({response: activitiesOfItinerary, success: true})
        }catch(error){
            console.log(error)
            res.json({response: error.message, sucess: false})
        }
    }
}

module.exports = activitiesController