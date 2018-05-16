const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require("body-parser");
const fs = require('fs');
const mongoose = require('mongoose');

const QuestionModel = require('./models/question.model');

mongoose.connect('mongodb://localhost/quyetde', function(err) {
    if(err) console.log(err);
    else console.log("DB connect success!");
});
QuestionModel.find({}, function(err, questions) {
    console.log(questions);
})

// const Neko = mongoose.model('Neko', {name: String});
// const kitty = new Neko({name: 'Bitch'});
// kitty.save().then(() => console.log('meow'));

const questionRouter = require('./router/questionRouter');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

// declare a new engine named 'handlebars from  'handlebars({defaultLayout: 'main'})'
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
// Set view app's view engine is 'handlebars' already declared above
app.set('view engine', 'handlebars');



app.get('/', function (req, res, next) {
    QuestionModel.find({}, function(err, questions) {
        console.log(questions);
        if (questions.length <= 0) res.render('home', {question: null})
        else {
            req.questions = questions;
            next();
        };
    })
    
    
}, function(req, res) {
    // let stringData = "Hung Arima";
    // let htmlData = "<h1>Hung Arima</h1>";
    // res.render('home', {
    //     stringData,
    //     htmlData
    // });
    
    res.render('home', {
        question : req.questions[Math.floor(Math.random() *  req.questions.length)]
    });
});

app.use('/question', questionRouter);



app.get('/ask', function(req,res) {
    res.render('ask');
});

app.post('/api/question', function(req, res) {
    let newQuestion = {
        content: req.body.question
    };
    QuestionModel.create(newQuestion, function(err, questionCreated) {
        if(err) console.log(err)
        else console.log(questionCreated);
    });

    // res.redirect(`/question/${newQuestion.id}`);

});




// app.get('/question/', function(req, res) {
//     let questionId = req.query.questionId;
//     let questionList = JSON.parse(fs.readFileSync('./questionList.json','utf-8'));

//     let questionFound = questionList.filter(question => question.id = questionId)[0];
//     res.render('question', {
//         question : questionFound,
//         totalVote :  questionFound.yes + questionFound.no
//     });
// });

app.get('/list', function(req, res) {
    let data = [
        "Sherlock Holmes",
        "John Watson",
        "Hung Arima"
    ]
    res.render('list', { data });
})

// fileSystem.writeFile("web12", JSON.stringify({a: 5, b: 10}));
// fileSystem.readFileNotSync('test.json', function(fileData) {
//     console.log(`Read File: ${fileData}`)
// })


// app.get('/', function (req, res) {
//     res.send("Homepage!");
// });

// app.get('/about', function (req, res) {
//     res.send("About page!");
// });

// app.get('/sendnude', function (req, res) {
//     console.log(__dirname);
//     res.sendFile(__dirname + "/unplash.jpg");
    
// });

// app.get('/blah', function (req, res) {
//     console.log(__dirname);
//     res.sendFile(path.resolve(__dirname, './public/index.html'));
    
// });

//Middleware Có thể làm với những trang Notfound, để middleware xuông cuối
// check điều kiện trước khi chuyển tiếp
app.use(function (req, res, next) {
    
    res.send('Not Found');
    
});

app.use(express.static('public'));

app.listen(8000, function(err) {
    if (err) console.log(err);
    else console.log("Server is up!");

});