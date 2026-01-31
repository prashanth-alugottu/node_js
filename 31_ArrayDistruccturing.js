// Destructuring Array
const fruits = ["apple", "mango", "banana"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);

const [firstFruit1, , thirdFruit1] = fruits;
console.log(firstFruit1);
console.log(thirdFruit1);

let a = 10;
let b = 20;

console.log(a);
console.log(b);
console.log("==========");
[a, b] = [b, a];
console.log(a);
console.log(b);
