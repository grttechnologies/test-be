const Utility = require('../utility/response');
const Constant = require('../constant/contants');

const checkCommentId = (req, res, next) => {
    if(req.body && req.body.commentId){
        next();
        return 
    }
    Utility.response(res, {}, "commentId is not Provided!", Constant.INVALID_REQUEST);
}

const checkComment = (req, res, next) => {
    if(req.body && req.body.comment){
        next();
        return 
    }
    Utility.response(res, {}, "comment is not Provided!", Constant.INVALID_REQUEST);
}

const checkCommentIdAndComment = (req, res, next) => {
    if(req.body && req.body.commentId && req.body.comment){
        next();
        return 
    }
    Utility.response(res, {}, "commentId | comment is not Provided!", Constant.INVALID_REQUEST);
}

module.exports = {
    checkComment,
    checkCommentId,
    checkCommentIdAndComment
};