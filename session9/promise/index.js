//Promise

let wait5s = function () {
    return new Promise(function (resolve, reject) { // Trạng thái ban đầu pending(đang xử lý) 
        setTimeout(function() {
            resolve("You are seeing a data");
        },5000);

        // reject("Error!");

    });
};

// console.log("Start");

// wait5s()
// .then(function(data) { // xử lý xong sẽ resolve, chạy đến then
//     console.log("5s");
//     console.log(data);
// })
// .then(wait5s)
// .then(function(data) { //function sẽ được thực hiện đồng bộ, sau function này then function khác
//     console.log("5s");
//     console.log(data);
// })
// .catch(function(reason) {// gặp lỗi sẽ reject, vào hàm catch này
//     console.log(reason);
// });


// End Promise

// Async (ES7) Viết Promise một cách dễ nhìn hơn
const asyncFunction = async () => {

    try {
        console.log("Start");

        let data = await wait5s(); //  Await dùng với promise chờ cho promise xử lý xong (pending -> resolve/reject) rồi mới chạy đến cái tiếp theo
        console.log("Data " + data);
        console.log("5s");

        await wait5s();
        console.log("5s");
    } catch (error) {
        console.log(error);

    }

}

asyncFunction();

// wait5s(function() {
//     console.log("5 second");
// })

// wait5s()
// .then(function() { //fucntion sẽ được thực hiện đồng bộ, sau function này then function khác

// })
// .then(function() {

// })
// .catch(function() { // Nếu gặp lỗi sẽ vào đây

// })