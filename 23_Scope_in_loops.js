for (var i = 0; i <= 3; i++) {
  console.log(new Date());
  setTimeout(function () {
    console.log("Time out in var : ", i);
  }, 1000);
}

for (let i = 0; i <= 3; i++) {
  // let ensures that each time out has its own independent copy of i.
  setTimeout(function () {
    console.log("Time out with let : ", i);
  }, 1000);
}

for (const i = 0; i <= 3; i++) {
  // Error because const will not be re assained.
  setTimeout(function () {
    console.log("Time out with let : ", i);
  }, 1000);
}
