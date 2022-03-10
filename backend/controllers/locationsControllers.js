const Locations = require('../models/locations')

const locationsController = {
    obtainLocations: async (req, res) =>{
        let locations
        let error = null
        try{
            locations = await Locations.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {locations},
            success: error ? false : true,
            error: error
        })
    },
    uploadLocations: async (req, res) =>{
        const{name, country, image}=req.body.dataInput
        new Locations({name: name,
            country: country,
            image: image,
            }).save()
        .then((respuesta) => res.json({respuesta}))
    },
    deleteLocations: async (req,res)=>{
        const id = req.params.id
        let error = null
        let aux 
        try{
            aux = await Locations.findOneAndDelete({_id:id})
        }catch(err){
        error = err
        console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {locations},
            success: error ? false : true,
            error: error
        })
    },
    modifyLocation: async (req, res) => {
        const id = req.params.id
        const location = req.body.dataInput
        let ciudadB = await Locations.findOneAndUpdate({_id:id}, location)
        console.log(ciudadB)
        // Locations.findOneAndUpdate({_id:id},location,{new:true})
    },
    obtainOneLocation: async (req, res) =>{
        let id = req.params.id
        let locations
        let error = null
        try{
            locations = await Locations.find({_id:id})
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {locations},
            success: error ? false : true,
            error: error
        })
    },
 
}
module.exports = locationsController