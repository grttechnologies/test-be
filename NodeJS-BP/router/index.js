const express = require('express');
const router = express.Router();
const CommentModel = require('../app/model/comment')
const Utility = require('../utility/response')
const Constant = require('../constant/contants')
const CommentController = require('../app/controller/comment')
const Validations = require('../middlewere/validation');

/** 
 ******* GET ******
*/
router.get('/comment',CommentController.getCommentList);

/** 
 ******* POST ******
*/
router.post('/comment',Validations.checkComment,CommentController.saveComment);

/** 
 ******* PUT ******
*/
router.put('/comment',Validations.checkCommentIdAndComment,CommentController.updateComment);

/** 
 ******* DELETE ******
*/
router.delete('/comment',Validations.checkCommentId,CommentController.deleteComment);
router.delete('/removeAllComment', function (req, res, next) {
    CommentModel.deleteMany({
    }).then((doc) => {
        Utility.response(res, [], "All Comments Removed!", Constant.SUCCESS);
    })
        .catch((err) => {
            res.status(Constant.FAILURE).json(err)
        })
});
module.exports = router;
