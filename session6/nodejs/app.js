const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const fs = require('fs');
const mongoose = require('mongoose');

const QuestionModel = require('./models/question.model');

mongoose.connect('mongodb://localhost/quyetde', function (err) {
    if (err) console.log(err);
    else console.log("DB connect success!");
});
QuestionModel.find({}, function (err, questions) {
    console.log(questions);
})


const questionRouter = require('./router/questionRouter');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

// declare a new engine named 'handlebars from  'handlebars({defaultLayout: 'main'})'
app.engine("handlebars", handlebars({
    defaultLayout: 'main'
}));
// Set view app's view engine is 'handlebars' already declared above
app.set('view engine', 'handlebars');



app.get('/', function (req, res, next) {
    QuestionModel.find({}, function (err, questions) {
        console.log(questions);
        if (questions.length <= 0) res.render('home', {
            question: null
        })
        else {
            req.questions = questions;
            next();
        };
    })


}, function (req, res) {

    res.render('home', {
        question: req.questions[Math.floor(Math.random() * req.questions.length)]
    });
});

app.use('/question', questionRouter);



app.get('/ask', function (req, res) {
    
    
    res.render('ask');
});

app.post('/api/question', function (req, res) {
    let newQuestion = {
        content: req.body.question
    };
    QuestionModel.create(newQuestion, function (err, questionCreated) {
        if (err) console.log(err)
        else console.log(questionCreated);
    });

    res.redirect('/');

});

// app.get('/views/layouts/style.css', function(req, res){ 
//     res.send('/views/layouts/style.css'); 
//     res.end(); 
// });



app.use(express.static('public'));

//Middleware Có thể làm với những trang Notfound, để middleware xuông cuối
// check điều kiện trước khi chuyển tiếp
app.use(function (req, res, next) {

    res.send('Not Found');

});

app.listen(8000, function (err) {
    if (err) console.log(err);
    else console.log("Server is up!");

});