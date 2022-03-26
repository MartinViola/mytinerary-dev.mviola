const Itineraries = require('../models/itineraries')

const commentsController = {

    addComment: async (req,res)=>{
        const {itinerary, comment} = req.body.comment
        const user = req.user._id
        try{
            const newComment = await Itineraries.findOneAndUpdate({_id:itinerary}, {$push: {comments: {comment, comment, userId: user}}}, {new:true})
            res.json({success: true, response:{newComment},message:"Thank you for leaving a comment."})
        }
        catch(error){
            console.log(error)
            res.json({success:false, message: "Something went wrong please try again in a moment."})
        }
    },

    modifyComment: async (req,res)=>{
        const {commentId,comment} = req.body.comment
        const user = req.user._id
        try{
            const newComment = await Itineraries.findOneAndUpdate({"comments._id":commentId}, {$set: {"comments.$.comment": comment}}, {new: true})
            res.json({ success: true, response:{newComment}, message:"Your comment has been modified." })
        }
        catch(error){
            console.log(error)
            res.json({success:false, message: "Something went wrong please try again in a moment."})
        }
    },

    deleteComment: async (req,res)=>{
        const id = req.params.id
        const user = req.user._id
        try{
            const deleteComment = await Itineraries.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id:id}}}, {new:true})
            res.json({success: true, response: {deleteComment}, message: "Your comment has been deleted."})
        }
        catch(error){
            console.log(error)
            res.json({success:false, message: "Something went wrong please try again in a moment."})
        }
    },

}

module.exports = commentsController