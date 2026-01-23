var x = 12;
x += 3;
console.log(x);

var y = 10;
y -= 1;
console.log(y);

x -= 2;
console.log("x values after -2 ", x);

x *= 2;
console.log("x values after multiplied by 2 ", x);

x /= 2;
console.log("x values after ", x);

x %= 2;
console.log("x values ", x);

console.log("\n\n");
// Comparision

console.log(5 == 5);
console.log(10 == "10");
console.log("===================");
console.log(5 === 5);
console.log(10 === "10");
console.log("===================");

console.log(10 >= "10");
console.log(10 >= 10);
console.log(10 >= "10");
console.log("===================");

console.log(10 != "10");
console.log(10 != 10);
console.log(10 != 11);

console.log("===================");
console.log(10 > 9);
console.log(10 > "9");

console.log(10 > "9" && 9 > 5);
console.log(10 > "9" && 9 > 20);
console.log(10 > "9" || 9 > 20);
console.log("===================");

// Ternary Operators
var num = 10;
msg = num % 2 == 0 ? "even" : "odd";
console.log(msg);
var num1 = 11;
msg1 = num1 % 2 == 0 ? "even" : "odd";
console.log(msg1);

var num2 = 1;
var msg2 = num2 > 0 ? "Positive" : "Negative";
console.log(msg2);

var num3 = -1;
var msg3 = num3 > 0 ? "Positive" : "Negative";
console.log(msg3);

var num4 = 0;
var msg4 = num4 >= 0 ? "Positive" : "Negative";
console.log(msg4);

var person_age = 21;
var msg5 = person_age >= 18 ? "Eligible for vote" : "Not eligible for vote";
console.log(msg5);

var person_age1 = 17;
var msg6 = person_age1 >= 18 ? "Eligible for vote" : "Not eligible for vote";
console.log(msg6);
