const Router = require('express').Router();

// const locationsControllers 
const locationsController = require('../controllers/locationsControllers')

const {obtainLocations, uploadLocations, deleteLocations, modifyLocation} = locationsController

Router.route('/alllocations')
.get(obtainLocations)
.post(uploadLocations)

Router.route('/alllocations/:id')
.delete(deleteLocations)
.put(modifyLocation)

module.exports = Router