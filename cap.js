/* What is callback 
Asynchronous function: callback & async, promise
DIFINE            call
callback          function
async/await      then/catch
promise
*/

// function division(a, b, callback) {
//   if (b === 0) {
//     callback("can't divide by 0", null);
//   } else {
//     callback(null, a % b);
//   }
// }

// division(7, 3, function (err, data) {
//   if (err) console.log("ERROR", err);
//   else {
//     setInterval(function () {
//       console.log("RESULT", data);
//       console.log("...");
//     }, 1000);
//   }
// });

// async function division(a, b) {
//   if (b === 0) {
//     throw new Error("can't divide by 0");
//   } else {
//     return a % b;
//   }
// }

// division(6, 3)
//   .then((data) => {
//     console.log("Result:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

function division(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("can't divide by 0");
    } else {
      setTimeout(function () {
        resolve(a % b);
      }, 3000);
    }
  });
}

division(8, 3)
  .then((data) => {
    console.log("Result:", data);
    division(6, 3)
      .then((data) => {
        console.log("Result:", data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });

    division(8, 3)
      .then((data) => {
        console.log("Result:", data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  })

  .catch((err) => {
    console.log("Error:", err);
  });
