'use strict'

function sort(input) {
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  var minI, temp;
    for (var i = 0; i < input.length; i++) {
        minI = i;
        for (var j = i + 1; j < input.length; j++) {
            if (input[j] < input[minI]) {
                minI = j;
            }
        }
        temp = input[i];
        input[i] = input[minI];
        input[minI] = temp;
    }
    return input;
}

module.exports = sort
