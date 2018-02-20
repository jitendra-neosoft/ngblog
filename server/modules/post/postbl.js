const postdb = require('./postdb');

module.exports.getAllPost = (req, res) => {
    postdb.getAllPost()
        .then((data)=> {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            return res.status(500).send({ success: false, err: err });
        })
}

module.exports.createPost = (req, res) => {
    postdb.createPost(req)
        .then((data)=> {
            return res.status(200).send({ success: true, data: data });
        })
        .catch((err) => {
            return res.status(500).send({ success: false, err: err });
        })
}