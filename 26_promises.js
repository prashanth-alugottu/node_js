let mypromise = new Promise((resolve, reject) => {
  var x = 0;
  if (x == 0) {
    resolve("The operation success");
  } else {
    reject("The operation NOT success");
  }
});

// mypromise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

mypromise.then((msg) => console.log(msg)).catch((error) => console.log(error));

console.log(
  "=================================================================",
);
function task1() {
  return new Promise((resolve, reject) => {
    let x = 1;
    if (x == 1) {
      setTimeout(() => {
        resolve("I am from TASK1");
      }, 2000);
    } else {
      reject("Error from TASK1");
    }
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    let x = 0;
    if (x == 0) {
      setTimeout(() => {
        resolve("I am from TASK2");
      }, 1000);
    } else {
      reject("Error from TASK2");
    }
  });
}

// task1()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// task2()
//   .then((msg) => console.log(msg))
//   .catch((error) => console.log(error));

task1()
  .then((res1) => {
    console.log(res1);
    return task2();
  })
  .then((res2) => {
    console.log(res2);
  })
  .catch((err) => console.log(err));

// ============================================================================
// 2. Write a function that takes an array of numbers as an argument and returns a promise that
// resolves with an array of all the odd numbers from the input array. Consume the promise and
// print the result using .then method.

function arryFunc(arr) {
  return new Promise((resolve, reject) => {
    new_arr = [];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        new_arr.push(arr[i]);
      }
    }
    resolve(new_arr);
  });
}

arryFunc([1, 2, 3, 4, 5])
  .then((value) => {
    console.log(value);
  })
  .catch((e) => console.log(e));

// 3. Write a function that takes a string as input and returns a promise.
// It should resolve with that reverse of the given string. Console log the result using then method.

function reverseString(str) {
  return new Promise((resolve, reject) => {
    var new_str = "";
    console.log(str.length);
    for (i = str.length - 1; i >= 0; i--) {
      char = str[i];
      new_str += char;
    }
    resolve(new_str);
  });
}

reverseString("chinnu")
  .then((msg) => {
    console.log("===> ", msg);
  })
  .catch((e) => console.log(e));

// 4. Write a promise with a code error inside it and handle that with .catch method.

// 5.
// Write a function that takes a boolean value input and returns a promise that resolves with the string
// "It's a truthy value" if input is true and rejects with "It's a falsy value" if input is false.
// Consume the promise with then and catch methods by calling the function and passing true and false
// one by one.

// 6.
// Write a function task1 that returns a promise with a setTimeout delay of 2 seconds and resolves a
// string value "Task1" and another function task2 that returns a promise with setTimeout delay of one
// second and resolves a string value "Task2". Now make these functions execute sequentially with promises.
// In the output Task1 and Task2 should be printed in order.

function ttask1() {
  return new Promise((resolve, error) => {
    setTimeout(() => {
      resolve("TTASK1");
    }, 2000);
  });
}

function ttask2() {
  return new Promise((resolve, error) => {
    setTimeout(() => {
      resolve("TTASK2");
    }, 1000);
  });
}

Promise.all([ttask1(), ttask2()])
  .then((msg) => {
    //   msg.forEach((res) => console.log(res));
    console.log(msg);
  })
  .catch((e) => console.log(e));

Promise.allSettled([ttask1(), ttask2()])
  .then((msg) => {
    //   msg.forEach((res) => console.log(res));
    console.log(msg);
  })
  .catch((e) => console.log(e));

// ttask1()
//   .then((msg) => {
//     console.log(msg);
//     return ttask2();
//   })
//   .then((msg) => {
//     console.log(msg);
//   });

let a = 30;
var promise5 = Promise.resolve(a);

promise5
  .then((msg) => console.log("Promise.resolve log ", msg))
  .catch((e) => console.log(e));

var promise6 = Promise.reject("Something went wrong");

promise6.then((msg) => console.log(msg)).catch((e) => console.log(e));
