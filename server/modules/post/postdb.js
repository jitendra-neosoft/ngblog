const postModel = require('./postmodel');

module.exports.getAllPost = () => {
    return postModel.find().sort({ _id: -1 });
}