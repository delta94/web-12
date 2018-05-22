const express = require('express');
const fs = require('fs');
let Router = express.Router();
// Khi làm việc với database sẽ chỉ làm việc với model, schema chỉ là cái khung
const QuestionModel = require('../models/question.model');
QuestionModel.find({}, function (err, questions) {
    console.log(questions);
})

//Middleware
Router.use(function (req, res, next) {
    // QuestionModel.find({}, function (err, questions) {
    //     if (questions.length <= 0) res.render('home', {
    //         question: null
    //     })
    //     else {
    //         req.questions = questions;
    //         next();
    //     }
    // });
    next();
});

Router.get('/', function (req, res) {
    let questionId = req.params.id;
    // let questionFound = req.questions.filter(question => question._id == questionId)[0];
    QuestionModel.findById(questionId, function(err, questionFound) {
        res.render('question', {
            question: questionFound,
            totalVote: questionFound ? questionFound.yes + questionFound.no : 0
        });
    });

    // QuestionModel.findOne({_id  : questionId}, function(err, questionFound) {})

    
});

Router.get('/:id', function (req, res) {
    let questionId = req.params.id;

    QuestionModel.findById(questionId, function(err, questionFound) {
        res.render('question', {
            question: questionFound,
            totalVote: questionFound ? questionFound.yes + questionFound.no : 0,
            yes : ((questionFound.yes / (questionFound.yes + questionFound.no)) * 100).toFixed(2),
            no : ((questionFound.no / (questionFound.yes + questionFound.no)) * 100).toFixed(2)
        });
    });
});

Router.get('/:id/:vote', function (req, res) {

    let questionId = req.params.id;
    let vote = req.params.vote;


    //findByIdAndUpdate method
    // if( vote == 'yes') {
    //     QuestionModel.findByIdAndUpdate(questionId, { $inc : {yes : 1}}, function(err, question) {
    //         if(err) console.log(err);
    //     })
    // } else {
    //     QuestionModel.findByIdAndUpdate(questionId, { $inc : {no : 1}}, function(err, question) {
    //         if(err) console.log(err);
    //     });
    // }
    
    //findById method
    // QuestionModel.findById(questionId, function (err, question) {
    //     if (err) return handleError(err);
    //     if (vote == 'yes') {
    //         question.yes++;
    //     } else if (vote == 'no') {
    //         question.no++;
    //     }

    //     question.save(function (err, updatedQuestion) {
    //         if (err) return handleError(err);

    //     });
    // });

    QuestionModel.findById(questionId, function (err, question) {

        if (err) return handleError(err);
        // if (vote == 'yes') {
        //     question.yes++;
        // } else if (vote == 'no') {
        //     question.no++;
        // }
        question[vote] +=1;

        question.remove


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
        // if (vote == 'yes') {
        //     question.yes++;
        // } else if (vote == 'no') {
        //     question.no++;
        // }
        question[vote] +=1;


        question.save(function (err, updatedQuestion) {
            if (err) return handleError(err);

        });
    });
    res.redirect(`/question/${questionId}`);

})

module.exports = Router;