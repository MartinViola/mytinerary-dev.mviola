const Router = require('express').Router();

// const locationsControllers 
const locationsController = require('../controllers/locationsControllers')

const {obtainLocations, uploadLocations, deleteLocations} = locationsController

Router.route('/alllocations')
.get(obtainLocations)
.post(uploadLocations)

Router.route('/alllocations/:id')
.delete(deleteLocations)

module.exports = Router