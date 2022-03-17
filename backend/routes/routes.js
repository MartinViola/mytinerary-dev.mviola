const Router = require('express').Router();
const validator = require('../config/validator')

const locationsController = require('../controllers/locationsControllers')
const itinerariesController = require('../controllers/itinerariesControllers');
const usersControllers = require('../controllers/userControllers');
const { Route } = require('react-router-dom');

const {obtainLocations, uploadLocations, deleteLocations, modifyLocation, obtainOneLocation} = locationsController
const {obtainItineraries, obtainOneItinerary, uploadNewItinerary, deleteOneItinerary, modifyOneItinerary} = itinerariesController
const {userRegistration, userLogIn, userLogOut, userEmailVerification}= usersControllers
// const passport = require('../models/user')


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
.post(validator, userRegistration)

Router.route('/auth/login')
.post(userLogIn)

Router.route('/auth/logout')
.post(userLogOut)

Router.route('/verify/:uniqueString')
.get(userEmailVerification)

module.exports = Router