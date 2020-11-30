const CommentManager = require('../manager/comment');
const Utility = require('../../utility/response');
const Constants = require('../../constant/contants');

module.exports = {
    getCommentList: async (req, res) => {
        try{
            const list = await CommentManager.getCommentList()
            Utility.response(res,list,"Commets List Fetched",Constants.SUCCESS)
        }
        catch(err) {
            Utility.response(res,err,"Error in Fetching Comment List",Constants.FAILURE)
        }   
    },
    saveComment: async (req, res) => {
        const request = {
            comment: req.body.comment
        }
        try{
            const commentObj = await CommentManager.saveComment(request)
            Utility.response(res,commentObj,"Commets Added Successfully",Constants.SUCCESS)
        }
        catch(err) {
            Utility.response(res,err,"Error in Adding Comment",Constants.FAILURE)
        }   
    },
    updateComment:async (req, res)=>{
        const {commentId,comment} = req.body
        try{
            const commentObj = await CommentManager.findByCommentId(commentId)
            commentObj.modifiedOn = new Date();
            commentObj.comment = comment
            const updatedCommentObj = await commentObj.save()
            Utility.response(res, updatedCommentObj, "Comment Updated Successfully", Constants.SUCCESS)
        }
        catch (err) {
            Utility.response(res,err,"Error in Updating Comment",Constants.FAILURE) 
        }
    },
    deleteComment:async (req, res)=>{
        const {commentId} = req.body
        try{
            const commentObj = await CommentManager.findByCommentId(commentId)
            commentObj.modifiedOn = new Date();
            commentObj.isDeleted = true
            await commentObj.save()
            Utility.response(res, {}, "Comment Deleted Successfully", Constants.SUCCESS)
        }
        catch (err) {
            Utility.response(res,err,"Error in Deleting Comment",Constants.FAILURE) 
        }
    }
};
