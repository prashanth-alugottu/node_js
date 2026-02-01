console.log("=============== Shallow Copy =========================");
const person = { name: "chinnu", age: 22, address: { city: "Hyd" } };
const shallowCopy = { ...person };
shallowCopy.name = "Prashanth";
shallowCopy.address.city = "Bangulore";
console.log("Before : ", person);
console.log("Before : ", person.address);
console.log(shallowCopy);
console.log(shallowCopy.address);

// ========================================
console.log("========================================");

const numbers = [1, 2, [5, 6]];
const shallowCopyArr = [...numbers];
shallowCopyArr[0] = 10;
shallowCopyArr[2][0] = 50;
console.log(numbers);
console.log(numbers[2]);
console.log(shallowCopyArr);
console.log(shallowCopyArr[2]);

// ========================================
console.log("============= Deep Copy ===========================");
const perDeepCopy = { name: "chinnu", age: 22, address: { city: "Hyd" } };
console.log(perDeepCopy);
deepCopy = JSON.parse(JSON.stringify(perDeepCopy));

deepCopy.name = "Prashanth";
deepCopy.address.city = "Delhi";

console.log(perDeepCopy);
console.log(deepCopy);

console.log(perDeepCopy.address);
console.log(deepCopy.address);

// ========================================
console.log("========================================");
const arrdeep = [1, 2, [3, 4]];
const deepCopyArr = JSON.parse(JSON.stringify(arrdeep));
console.log(deepCopyArr);
console.log(deepCopyArr[2]);

deepCopyArr[0] = 10;
deepCopyArr[2][0] = 30;

console.log("After ");
console.log(deepCopyArr);
console.log(deepCopyArr[2]);

console.log(arrdeep);
console.log(arrdeep[2]);

let str = "hello";

for (var a of str) {
  console.log(a);
}
