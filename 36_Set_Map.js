const mySet = new Set();
mySet.add(1);
mySet.add(30);
mySet.add(50);
console.log(mySet);
console.log(mySet.delete(50));
console.log(mySet);
console.log(mySet.has(1));

for (var a of mySet) {
  console.log(a);
}

mySet.forEach((value) => console.log(value));

let arrayFromSet = [...mySet];
console.log(mySet);
console.log(arrayFromSet);
let arrayFromSet1 = Array.from(mySet);
console.log(arrayFromSet1);

// ================================================
console.log("================================================");

let myMap = new Map();
myMap.set("name", "chinnu");
myMap.set("age", 22);

console.log(myMap);

console.log(myMap.get("name"));

console.log(myMap.get("chinnu"));

console.log(myMap.delete("age"));
console.log(myMap);
console.log(myMap.size);

console.log(myMap.has("age"));
console.log(myMap.has("name"));

myMap.set("address", "Hyd");

for (var [key, value] of myMap) {
  console.log(key, value);
}

myMap.forEach((v, k) => console.log(k, v));
