let name = "chinnu";
console.log([...name]);

let arr = [1, 2, 3, 4];
console.log([...arr]);

let arr1 = ["chinnu", "chanti", "banti"];
console.log([...arr1]);

let combined = [...arr, ...arr1];
console.log(combined);
// ========================================
console.log("========================================");
var obj1 = {
  name: "chinnu",
  age: 22,
};
console.log({ ...obj1 });

let obj2 = { city: "hyd" };

const combinedobj = { ...obj1, ...obj2 };
console.log(combinedobj);

// ========================================
console.log("========================================");

function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
var total = sum(...numbers);
console.log(total);
