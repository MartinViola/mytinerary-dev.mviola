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
    // createItinerary: async (req, res) =>{
    //     const{name, country, image}=req.body.dataInput
    //     new Itineraries({name: name,
    //         country: country,
    //         image: image,
    //         }).save()
    //     .then((respuesta) => res.json({respuesta}))
    // },
    // deleteLocations: async (req,res)=>{
    //     const id = req.params.id
    //     let error = null
    //     let aux 
    //     try{
    //         aux = await Locations.findOneAndDelete({_id:id})
    //     }catch(err){
    //     error = err
    //     console.log(error)
    //     }
    //     res.json({
    //         response: error ? 'ERROR' : {locations},
    //         success: error ? false : true,
    //         error: error
    //     })
    // },
    // modifyLocation: async (req, res) => {
    //     const id = req.params.id
    //     const location = req.body.dataInput
    //     let ciudadB = await Locations.findOneAndUpdate({_id:id}, location)
    //     console.log(ciudadB)
    //     // Locations.findOneAndUpdate({_id:id},location,{new:true})
    // }

}
module.exports = itinerariesController