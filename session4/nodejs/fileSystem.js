const fs = require('fs');

// let objData= {
//     a: 5,
//     b: 10
// }

// console.log("Begin write file!");

// fs.writeFile('test.txt', JSON.stringify(objData), function(err) {
//     if (err) console.log("Err " + err)
//     else console.log("Write file success!")
// });

// console.log("End write file!");

// fs.readFile('tesst.txt', function (err, data) {
//     if (err) console.log(err)
//     else console.log("Read file success ! Data: " + data);
// });

// let dataFileSync = fs.readFileSync('test.txt');
// console.log("Read file successfully" + dataFileSync);

const writeFile = function(filename, data) {
    fs.writeFileSync(filename, data);
}

const readFile = function(path) {
    return fs.readFileSync(filename, 'utf-8');
}

const readFileNotSync = function(path, onReadFileDone) {
    fs.readFile(path, 'utf-8', function(err, data) {
        onReadFileDone(data);
    });
}

module.exports = {
    writeFile,
    readFileNotSync,
    readFile

}