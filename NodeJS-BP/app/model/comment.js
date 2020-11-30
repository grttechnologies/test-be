const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {type: String, default: ''},
    addedOn: {type: Number, default: Date.now()},
    modifiedOn: {type: Number, default: 0},
    isDeleted: {type: Boolean, default: false}
});


module.exports = mongoose.model('Comment', CommentSchema);
