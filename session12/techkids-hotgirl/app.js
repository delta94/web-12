const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/techkids-hotgirl", (err) => {
    if(err) console.err(err)
    else console.log("DB connect success!");
})


let app = express();
app.use(bodyParser.urlencoded({extended: false}));
const port = 6996;

app.listen(port, (err) => {
    if(err) console.error(err)
    else console.log("Server is up!")
})