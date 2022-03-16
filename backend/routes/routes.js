const Router = require('express').Router();

const locationsController = require('../controllers/locationsControllers')
const itinerariesController = require('../controllers/itinerariesControllers');
const usersControllers = require('../controllers/userControllers');
const { Route } = require('react-router-dom');

const {obtainLocations, uploadLocations, deleteLocations, modifyLocation, obtainOneLocation} = locationsController
const {obtainItineraries, obtainOneItinerary, uploadNewItinerary, deleteOneItinerary, modifyOneItinerary} = itinerariesController
const {userRegistration, userLogIn, userLogOut, userEmailVerification}= usersControllers


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

Router.route('/auth/registration')
.post(userRegistration)

Router.route('/auth/login')
.post(userLogIn)

Router.route('/auth/logout')
.post(userLogOut)

module.exports = Router