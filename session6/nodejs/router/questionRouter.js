const express = require('express');
const fs = require('fs');
let Router = express.Router();

const QuestionModel = require('../models/question.model');
QuestionModel.find({}, function (err, questions) {
    console.log(questions);
})

//middleware
Router.use(function (req, res, next) {
    QuestionModel.find({}, function (err, questions) {
        if (questions.length <= 0) res.render('home', {
            question: null
        });
        else {
            req.questions = questions;
            next();
        }
    });
});

Router.get('/', function (req, res) {
    let questionId = req.params.id;
    let questionFound = req.questions.filter(question => question.id == questionId)[0];

    res.render('question', {
        question: questionFound,
        totalVote: questionFound ? questionFound.yes + questionFound.no : 0
    });
});

Router.get('/:id', function (req, res) {
    let questionId = req.params.id;

    let questionFound = req.questions.filter(question => question.id == questionId)[0];
    res.render('question', {
        question: questionFound,
        totalVote: questionFound ? questionFound.yes + questionFound.no : 0
    });
});

Router.get('/:id/:vote', function (req, res) {

    let questionId = req.params.id;

    let vote = req.params.vote;
    QuestionModel.findById(questionId, function (err, question) {
        if (err) return handleError(err);
        if (vote == 'yes') {
            question.yes++;
        } else if (vote == 'no') {
            question.no++;
        }

        question.save(function (err, updatedQuestion) {
            if (err) return handleError(err);

        });
    });
    res.redirect(`/question/${questionId}`);


});

Router.post('/:id', function (req, res) {
    let questionId = req.params.id;
    let vote = req.body.vote;
    QuestionModel.findById(questionId, function (err, question) {

        if (err) return handleError(err);
        if (vote == 'yes') {
            question.yes++;
        } else if (vote == 'no') {
            question.no++;
        }


        question.save(function (err, updatedQuestion) {
            if (err) return handleError(err);

        });
    });
    res.redirect(`/question/${questionId}`);

})

module.exports = Router;