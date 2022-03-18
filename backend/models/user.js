const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userFirstname: {type: String, required:true},
    userLastname: {type: String, required:true},
    userEmail: {type: String, required:true},
    userPassword: [{type: String, required:true}],
    userUniqueString: {type: String, required:true},
    userPhotoURL: {type: String, required:true},
    userCountry: {type: String, required:true},
    userEmailVerified: {type: Boolean, required:true},
    // _id: {type: String},
    from: {type: Array},
})

const User = mongoose.model('users', userSchema)
module.exports = User