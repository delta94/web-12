const express = require('express');
const fs = require('fs');
let Router = express.Router();
//middleware
Router.use(function (req, res, next) {
    req.questionList = require('../questionList.json');
    next();
    
});

Router.get('/', function(req, res) {
    let questionId = req.params.id;


    let questionFound = req.questionList.filter(question => question.id == questionId)[0];
    res.render('question', {
        question : questionFound,
        totalVote : questionFound ? questionFound.yes + questionFound.no : 0
    });
});

Router.get('/:id', function(req, res) {
    let questionId = req.params.id;
    let questionList = require('../questionList.json'); 

    let questionFound = req.questionList.filter(question => question.id == questionId)[0];
    res.render('question', {
        question : questionFound,
        totalVote : questionFound ? questionFound.yes + questionFound.no : 0
    });
});

Router.get('/:id/:vote', function(req, res) {
    
    let questionId = req.params.id;
    
    let vote = req.params.vote;
    
    req.questionList[questionId][vote] += 1;

    fs.writeFileSync('../questionList.json', JSON.stringify(req.questionList), 'utf-8');

    res.redirect(`/question/${questionId}`);


});
// Form 
Router.post('/:id', function(req, res) {
    let questionId = req.params.id;
    let questionList = require('../questionList.json');
    let vote = req.body.vote;

    questionList[questionId][vote] += 1;
    fs.writeFileSync('../questionList.json', JSON.stringify(req.questionList), 'utf-8');
    res.redirect(`/question/${questionId}`);

})

module.exports = Router;