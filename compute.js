 /* What is callback 
callback function:
define       call
callback     function
*/ 
// define 
// 01
// function division(a, b) {
//     return a % b;
// }
// 02
// function division(a, b) {
//     if (b === 0) {
//         return "can't divide by 0"
//     } else {
//         return a % b;
//     }
// }
// 03
function division(a, b, callback) {
    if (b === 0) {
        callback("can't divide by 0", null);
} else {
    callback(null, a % b);
}
}
// call 

// 01

// const result = division(101 , 0);
// console.log(result);

// 02
division(7, 0, function(err, data) {
    if(err) console.log("ERROR", err);
    else {
        console.log("RESULT", data);
        console.log("...");
    }
})
