const fs = require('fs');

const writeFile = function(filename, data) {
    fs.writeFileSync(filename, data)
}

// const readFileNotSync = function(path, onReadFileDone) {
//     fs.readFile(path, 'utf-8', function(err, data) {
//         onReadFileDone(data);
//     }
// }

module.exports = {
    writeFile
}