const express = require('express');

const QuestionModel = require('../models/question.model');

let Router = express.Router();

Router.post('/question', function(req, res) {
    QuestionModel
    .create(req.body)
    .then(function (questionCreated) {
        res.send({success: 1, questionId: questionCreated._id});
    })
    .catch(function (err) {
        res.status(502).send({success: 0, err: err})
    });
});

Router.get('/question', async (req, res) => {
    try {
        let question = await QuestionModel.find({}).exec();
        res.json({success: 1, question: questions[Math.floor(Math.random()* questions.length)]});
    } catch (error) {
        if(err) res.status(502).send({success: 0, err: err})
    }
    
});

module.exports = Router;