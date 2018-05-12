const express = require('express');
const path = require('path');
const fileSystem = require('./fileSystem');
const request = require('request');
let port = 8000;

let app = express();

app.get ('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
})

app.get('/web:class', function(req, res) {
    request('https://btvn-web12.herokuapp.com/api/web' + req.params.class, function (error, response, body) {
        if (error) console.log(error);
        else {
            var name = "";
            jsonData = JSON.parse(body)
            for(data of jsonData.data) {
                name += `<li>${data}</li>`;
                console.log(data);
            }
        }
        res.send(`<ul>${name}</ul>`)
    })
    
})

function getDataByUrl(url, onGetDataDone) {
    request(url, function (error, response, body) {
        console.log('error', error);
        if (body) {
            try {
                let data = JSON.parse(body);
                onGetDataDone(data);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }
    });
}


app.use(express.static('public'));

app.listen(port, function(err) {
    if (err) console.log(err);
    else console.log("Server is up!");

});