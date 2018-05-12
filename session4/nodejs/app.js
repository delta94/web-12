const express = require('express');

const path = require('path');
const fileSystem = require('./fileSystem');
// module.exports = {
//     writeFile
// }

fileSystem.writeFile("web12", JSON.stringify({a: 5, b: 10}));
fileSystem.readFileNotSync('test.json', function(fileData) {
    console.log(`Read File: ${fileData}`)
})

let app = express();
// app.get('/', function (req, res) {
//     res.send("Homepage!");
// });

app.get('/about', function (req, res) {
    res.send("About page!");
});

app.get('/sendnude', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + "/unplash.jpg");
    
});

app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendFile(path.resolve(__dirname, './public/index.html'));
    
});

app.use(express.static('public'));

app.listen(8000, function(err) {
    if (err) console.log(err);
    else console.log("Server is up!");

});