function sum(...num) {
  return num;
}
console.log(sum(1, 2, 3, 4, 5, 6));

// ========================================
console.log("========================================");

let fruits = ["mango", "apple", "banana", "greps"];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

let person1 = { name: "chinnu", age: 22, city: "hyd" };
let { names, ...othersp } = person1;
console.log(names);
console.log(othersp);
