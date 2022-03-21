const { duration } = require('@mui/material')
const Itineraries = require('../models/itineraries')

const itinerariesController = {
    obtainItineraries: async (req, res) =>{
        let itineraries
        let error = null
        try{
            itineraries = await Itineraries.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error: error
        })
    },
    obtainOneItinerary: async (req, res) =>{
        let id = req.params.id
        let itineraries
        let error = null
        try{
            itineraries = await Itineraries.find({city_id:id})
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error: error
        })
    },
    uploadNewItinerary: async (req, res) =>{
        const{city_id, city, itinerary, duration, price, creator, creatorImage, likes, hashtags, comments, activities_id}=req.body.dataInput
        new Itineraries({
            city_id: city_id,
            city: city,
            itinerary: itinerary,
            duration: duration,
            price: price,
            creator: creator,
            creatorImage: creatorImage,
            likes: likes,
            hastags: hashtags,
            comments: comments,
            activities_id: activities_id,
            }).save()
        .then((respuesta) => res.json({respuesta}))
    },
    deleteOneItinerary: async (req,res)=>{
        const id = req.params.id
        let error = null
        let aux 
        try{
            aux = await Itineraries.findOneAndDelete({_id:id})
        }catch(err){
        error = err
        console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itineraries},
            success: error ? false : true,
            error: error
        })
    },
    modifyOneItinerary: async (req, res) => {
        const id = req.params.id
        const itinerary = req.body.dataInput
        let itineraryB = await Itineraries.findOneAndUpdate({_id:id}, itinerary)
        // Locations.findOneAndUpdate({_id:id},location,{new:true})
    }

}
module.exports = itinerariesController