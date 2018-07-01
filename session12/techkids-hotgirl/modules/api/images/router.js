const express = require('express');
const Router = express.Router();

const ImageController = require('./controller')

// "?page="
Router.get('/', (req, res) => {
    ImageController
        .listImagesByPage(req.query.page || 1)
        .then(images => res.send({ success: 1, images }))
        .catch(err => {
            console.error(err);
            res.status(500).send({success: 0, errMsg: err})
        })
});


Router.post('/', (req, res) => {
    ImageController
        .createImage(req.body)
        .then(imageCreatedId => res.status(201).send({success: 1, image: imageCreatedId}))
        .catch(err => {
            console.error(err);
            res.status(500).send({success: 0, errMsg: err});
        })
})

Router.post('/:id/comments', (req, res) => {
    console.log(req.body);
    ImageController
        .createComment(req.body)
        .then(commentCreatedId => res.status(201).send({success: 1, comment: commentCreatedId}))
        .catch(err => {
            console.error(err);
            res.status(500).send({success: 0, errMsg: err});
        })
})


module.exports = Router;