let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve("This is promise1");
    } else {
      reject("Error from Promise1");
    }
  }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve("This is promise2");
    } else {
      reject("Error from Promise2");
    }
  }, 2000);
});

async function resolvePromisesSequence() {
  let res1 = await promise1;
  console.log(res1);

  let res2 = await promise2;
  console.log(res2);
}
resolvePromisesSequence();

async function square(num) {
  return num * num;
}

square(3)
  .then((value) => console.log(value))
  .catch((e) => console.log(e));

async function printRes() {
  let res = await square(3);
  console.log(res);
}
printRes();
