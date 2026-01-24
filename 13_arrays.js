var fruits = ["mango", "Apple", "banana"];
console.log(fruits.length);
console.log("Before pushing : ", fruits);
fruits.push("orange");
console.log("After pushing : ", fruits);

fruits.pop();
console.log("After pop : ", fruits);

fruits.shift();
console.log("After shift : ", fruits);

fruits.unshift("pine apple");
console.log("After unshift : ", fruits);

console.log(fruits.includes("mango"));
console.log(fruits.includes("pine apple"));

console.log(fruits.indexOf("pine apple"));

console.log(fruits.reverse());

fruit1 = ["apple", "mango"];
fruit2 = ["banana", "orange"];
console.log(fruit1);
console.log(fruit2);
res = fruit1.concat(fruit2);
console.log(res);

var resStr = res.join(",");
console.log("===>> joing with , and making it into string : ", resStr);

var resStr = res.join("-");
console.log("===>> joing with - and making it into string : ", resStr);

var resStr = res.join("::::");
console.log("===>> joing with , and making it into string : ", resStr);

console.log("Slicing : ", res.slice(0, 3));
console.log("Slicing : ", res.slice(0, 1));
console.log("Slicing : ", res.slice(0, 9));
console.log("Slicing : ", res.slice(-1, 9));
console.log("Slicing : ", res.slice(-3, 3));
// console.log("Slicing : ", res.slice(_, 2)); Error came

nums = [1, 2, 3, 4, 5];
console.log(Array.isArray(nums));
console.log(Array.isArray(resStr));

console.log("Other way to creare a array ");

var newArray = new Array();
console.log(newArray);
newArray.push("prash");
console.log("Adding prash : ", newArray);
var newArray1 = new Array(1, 2, 3, "Hello");
console.log("We can also pass the values in the constrctor : ", newArray1);

var chars = Array.from("Prashanth");
console.log(chars);
