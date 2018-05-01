// setTimeout(function(){
//     console.log("1s");
// }, 1000)


// function countDown(count) {
//     for (let i = count; i>= 0; i--) { // Solution1: change var to let
//         setTimeout(function() {
//             console.log(i);
//         }, 1000*(count - i))
//     }
// }

// countDown(5);

// Solution2: Write 2 functions

// function print (num, waittime) {
//     setTimeout(function() {
//         console.log(num);
//     }, 1000*(waittime))
// }

// function countDown(count) {
//     for (var i = count; i>= 0; i--) { 
//         print(i,count - i);
//     }
// }

// countDown(5);


// function waitMs(sec) {
//     setTimeout(function() {
//         console.log("Wait " + sec + "s");
//     }, sec * 1000);
// }

// waitMs(3);
// waitMs(2);


// Write function

// // 1
// function name(para1, para2) {
//     console.log(para1, para2);
// }

// name(6, 9);

// // 2
// const name = function () {

// }
// name();

// 3
// const name = (param1) => {
//     console.log(param1);
// }

// const nameClone = (print) => {
//     print("hihi");
// }

// nameClone(name);


function brushTeeth() {
    setTimeout(function() {
        console.log("Done brush teeth!");
    }, 2000)
}

function goToSchool() {
    setTimeout(function() {
        console.log("Go to school!");
    }, 1999)
}

brushTeeth();
goToSchool();
