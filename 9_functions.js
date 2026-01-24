function minuteToSeconds(x) {
  return x * 60;
}

console.log(minuteToSeconds(4));

console.log("=======================");

function isPrime(num) {
  var isprime = true;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      isprime = false;
    }
  }
  return isprime;
}
console.log(isPrime(12));

console.log("=======================");

function calculator(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  }
}

console.log(calculator(5, 6, "-"));

console.log("=======================");

// ================================
// Anonymous Function or Function expression
// ================================
var sum = function (a, b) {
  return a + b;
};
console.log(sum(3, 1));

console.log("=======================");

// ================================
// IIFE (Immediately Invoked Function Expression)
// ================================
(function () {
  console.log("I am an IIFE");
})();
