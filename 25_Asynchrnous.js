function task1() {
  console.log("Task1");
}

// function task2() {
//   console.log("Task2");
// }

// function task2() {
//   setTimeout(() => {
//     console.log("Task2");
//   }, 2000);
// }

function task2(callback) {
  setTimeout(() => {
    console.log("Task2");
    callback();
  }, 3000);
}

function task3(cb) {
  setTimeout(() => {
    console.log("Task3");
    cb();
  }, 1000);
}

function task4() {
  console.log("Task4");
}

task1();
// task2();
// task3();
// task2(task3(task4));

task2(() => {
  task3(() => {
    task4();
  });
});

// task2(function () {
//   task3(function () {
//     task4();
//   });
// });
