const User = require('../models/user')
const bcryptjs = require('bcryptjs')

const userController = {
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
                        await userExists.save()
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
                    userPhotoURL, 
                    userCountry, 
                    userEmailVerified:true,
                    from:[from],
                })
                if(from !== "registrationForm"){
                    await newUser.save()
                    res.json({success: true, from:"registrationForm", message: "Congrats! Your user has been created from: "+from})
                }
                else{
                    await newUser.save()
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
                            userFirstname: userExists.userFirstname,
                            userEmail: userExists.userEmail,
                            from: userExists.from,
                        }
                        await userExists.save()
                        res.json({success: true, from: from, response: {userData}, message: "Welcome back "+userData.userFirstname})
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
                            userFirstname: userExists.userFirstname,
                            userEmail: userExists.userEmail,
                            from: userExists.from,
                        }
                        res.json({success: true, from: from, response: {userData}, message: "Welcome back "+userData.userFirstname})
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
        const email = req.body.closerUser
        const user = await User.findOne({email})
        await user.save()
        res.json(console.log(email + 'logged out'))
    },
}

module.exports = userController