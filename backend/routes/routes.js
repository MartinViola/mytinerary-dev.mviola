const Router = require('express').Router();

// const locationsControllers 
const locationsController = require('../controllers/locationsControllers')
const itinerariesController = require('../controllers/itinerariesControllers');
const { Route } = require('react-router-dom');

const {obtainLocations, uploadLocations, deleteLocations, modifyLocation, obtainOneLocation} = locationsController
const {obtainItineraries, obtainOneItinerary, uploadNewItinerary, deleteOneItinerary, modifyOneItinerary} = itinerariesController

Router.route('/alllocations')
.get(obtainLocations)
.post(uploadLocations)

Router.route('/alllocations/:id')
.delete(deleteLocations)
.put(modifyLocation)
.get(obtainOneLocation)

Router.route('/allitineraries')
.get(obtainItineraries)
.post(uploadNewItinerary)

Router.route('/allitineraries/:id')
.get(obtainOneItinerary)
.delete(deleteOneItinerary)
.put(modifyOneItinerary)


module.exports = Router