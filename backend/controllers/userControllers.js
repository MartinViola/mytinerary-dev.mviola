const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

const sendEmail = async (email, uniqueString) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: "dev.mviola@gmail.com",
            pass: "1621dev.mviola"
        }
    })

    let sender = "dev.mviola@gmail.com"
    let mailOptions ={
        from: sender,
        to: email,
        subject: "MyTinerary: User registration validation",
        html: `Press <a href="http://localhost:4000/api/verify/${uniqueString}">here</a> to validate the user registration`
    };
    await transporter.sendMail(mailOptions, function(error,response){
        if(error){
            console.log(error)
        }else{
            console.log("Confirmation email sent!")
        }
    })
};

const userController = {

    userEmailVerification: async(req, res) => {

        const {uniqueString} = req.params;

        const user = await User.findOne({userUniqueString: uniqueString})
        console.log(user)
        if(user){
            user.userEmailVerified = true
            await user.save()
            res.redirect("http://localhost:3000/")
        }else{
            res.json({success: false, response: "Your email has not been verified"})
        }

    },

    userRegistration: async (req,res) => {
        let {userFirstname, userLastname, userEmail, userPassword, userPhotoURL, userCountry, from} = req.body.newUserData

        try{
            const userExists = await User.findOne({userEmail})
            if (userExists){
                if(userExists.from.indexOf(from) !== -1){
                    res.json({success: false, from:"registrationForm", message: "You have already registered, please proceed to 'Log in'."})
                }else{
                    const hashedPassword = bcryptjs.hashSync(userPassword, 10)
                    userExists.from.push(from)
                    userExists.userPassword.push(hashedPassword)
                    if(from === "registrationForm"){
                        //luego agregaremos verificacion via email
                        userExists.userUniqueString = crypto.randomBytes(15).toString('hex')
                        await userExists.save()
                        await sendEmail(userEmail, userExists.uniqueString)
                        res.json({success: true, from:"registrationForm", message: "To confirm your registration we have sent an email to you."})
                    }else{
                        userExists.save()
                        res.json({success: true, from:"registrationForm", message: "Added "+from+" to you possibilities to 'Log in'."})
                    }
                }
            }else{
                const hashedPassword = bcryptjs.hashSync(userPassword,10)
                const newUser = await new User({
                    userFirstname, 
                    userLastname, 
                    userEmail, 
                    userPassword:[hashedPassword], 
                    userUniqueString: crypto.randomBytes(15).toString('hex'),
                    userPhotoURL, 
                    userCountry, 
                    userEmailVerified:false,
                    from:[from],
                })
                if(from !== "registrationForm"){
                    await newUser.save()
                    res.json({success: true, from:"registrationForm", message: "Congrats! Your user has been created from: "+from})
                }
                else{
                    await newUser.save()
                    await sendEmail(userEmail, newUser.userUniqueString)
                    res.json({success: true, from:"registrationForm", message: "We have sent an email to confirm the registration, please check your mailbox."})
                }
            }
        }
        catch (error){
            console.log(error)
            res.json({success: false, message: "We're sorry, something went wrong, please try again."})
        }
    },
    userLogIn: async (req, res)=>{
        const {userEmail, userPassword, from } = req.body.loggedUserData
        try{
            const userExists = await User.findOne({userEmail})
            if(!userExists){
                res.json({success: false, message: "You need to be registered. Please proceed to sign up first."})
            }
            else{
                if(from !== "logInForm"){
                    let passwordMatches = userExists.userPassword.filter(pass => bcryptjs.compareSync(userPassword, pass))
                    if (passwordMatches.length > 0){
                        const userData = {
                            userId: userExists._id,
                            userFirstname: userExists.userFirstname,
                            userEmail: userExists.userEmail,
                            userPhotoURL: userExists.userPhotoURL,
                            from: userExists.from,
                        }
                        await userExists.save()
                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn:60*60*24})
                        res.json({
                            success: true, 
                            from: from, 
                            response: {token, userData}, 
                            message: "Welcome back "+userData.userFirstname
                        })
                    }
                    else{
                        res.json({success: false, from: from, message: "You have not registered from "+from+", you can sign up from "+from})
                    }
                }
                else{
                    if(userExists.userEmailVerified){
                        let passwordMatches = userExists.userPassword.filter(pass => bcryptjs.compareSync(userPassword, pass))
                        if(passwordMatches.length > 0){
                        const userData ={
                            userId: userExists._id,
                            userFirstname: userExists.userFirstname,
                            userEmail: userExists.userEmail,
                            userPhotoURL: userExists.userPhotoURL,
                            from: userExists.from,
                        }
                        const token = jwt.sign({...userData},process.env.SECRET_KEY,{expiresIn:60*60*24})
                        res.json({
                            success: true, 
                            from: from, 
                            response: {token, userData}, 
                            message: "Welcome back "+userData.userFirstname
                        })
                        }else{
                            res.json({success: false, from: from, message: "Email or password are incorrect"})
                        }
                    }
                    else{
                        res.json({success: false, from: from, message: "You have not verified your email, please check your mailbox to proceed with log in."})
                    }
                }
            }
        }
        catch(error){
            console.log(error)
            res.json({success: false, message: "We're sorry, something went wrong, please try again."})
        }
    },
    userLogOut: async (req, res)=>{
        const email = req.body.closeUser
        const user = await User.findOne({email})
        await user.save()
        res.json(console.log(email + ' logged out'))
    },
}

module.exports = userController