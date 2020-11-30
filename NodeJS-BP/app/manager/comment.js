const CommentSchema = require('../model/comment');

const getCommentList = () =>{
    return CommentSchema.find({isDeleted: false})
}

const saveComment = (req) =>{
    const commentModel = new CommentSchema(req)
    return commentModel.save()
}

const findByCommentId = (commentId) =>{
    return CommentSchema.findById(commentId)
}

module.exports = {
    getCommentList,
    saveComment,
    findByCommentId
};