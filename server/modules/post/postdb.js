const postModel = require('./postmodel');

module.exports.getAllPost = () => {
    return postModel.find().sort({ _id: -1 });
}

module.exports.createPost = (req) => {
    return postModel.create(req.body);
}