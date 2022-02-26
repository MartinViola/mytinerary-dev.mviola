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
        console.log(req.body)
        const{name, country, image}=req.body.dataInput
        new Locations({name: stadt,
            country: land,
            image: bild,
            }).save()
        .then((respuesta) => res.json({respuesta}))
    },
    deleteLocations: async (req,res)=>{
        const id = req.params.id
        console.log(req.params)
        await Locations.findOneAndDelete({_id:id})
    }

}
module.exports = locationsController