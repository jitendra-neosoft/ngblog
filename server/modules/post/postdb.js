const postModel = require('./postmodel');

module.exports.getAllPost = () => {
    return postModel.find().sort({ _id: -1 });
}

module.exports.createPost = (req) => {
    return postModel.create(req.body);
}

module.exports.updatePost = (req) => {
    return postModel.update({ _id: req.body.id }, req.body);
}

module.exports.deletePost = (req) => {
    return postModel.findByIdAndRemove(req.body.id);
}