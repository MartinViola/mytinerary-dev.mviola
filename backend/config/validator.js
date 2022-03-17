const joi = require('joi')

const validator = (req, res, next)=>{

    const schema = joi.object({
        userFirstname: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'You name must have at least 2 characters',
            'string.max':'You name cannot exceed 20 characters'
        }),
        userLastname: joi.string().max(20).min(2).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'You name must have at least 2 characters',
            'string.max':'You name cannot exceed 20 characters'
        }),
        userEmail: joi.string().email({minDomainSegments: 2}).required().messages({
            'string.email':'Incorrect email format.'
        }),
        userPassword: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).message({
            'string.min': 'The password must be have a minimum length of 8 characters (lower case, upper case and numberes are required).',
            'string.pattern': 'The pasword must be alphanumerical and it must contain at least one number.'
        }),
        userPhotoURL: joi.string().min(5).trim().required().messages({
            'string.min':'URL must have at least 5 characters',
        }),
        userCountry: joi.string(),
        from:joi.string()   
    })

    const validation = schema.validate(req.body.newUserData, {abortEarly:false})
        if(validation.error){
            return res.json({success: false, message:validation.error.details})
        }
    
    next()

}
module.exports = validator