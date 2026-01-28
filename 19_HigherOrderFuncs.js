function addOne(x) {
  return x + 1;
}

function increament(func, value) {
  var add = func(value);
  return add;
}

var res = increament(addOne, 3);
console.log(res);

// ========================================================================
console.log("\n====== . ===========");

function operate(a, d, operation) {
  return operation(a, d);
}

function add(a, b) {
  return a + b;
}

var res = operate(1, 2, add);
console.log(res);

// ========================================================================
console.log("\n====== sDuble array ===========");

function transform(numArray, func) {
  return func(numArray);
}

function doubleNumber(num) {
  new_array = [];
  for (i = 0; i < num.length; i++) {
    new_array.push(num[i] * 2);
  }
  return new_array;
}

let num = [1, 2, 3, 4];
var res = transform(num, doubleNumber);
console.log(res);
