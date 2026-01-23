var myName;
myName = "Prashganth";
var myAge = 22;
var myCity = "Nrl";
myCity = "Bng";
myCity = "Hyd";

console.log("Hello World");
console.log(myCity);

var obj = {
  name: "Prashanth",
  age: 22,
  city: "hyd",
};
console.log(obj);

console.log(obj.age);

console.log(obj["city"]);

var myArray = ["Prashanth", 22, "hyderabd"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray.length);

console.log(typeof myArray);
console.log(typeof myCity);

console.log(Array.isArray(myCity));
console.log(Array.isArray(myArray));

var person = {
  name: "Chanti",
  age: 30,
  city: "Hitech",
};
console.log("===>> " + person.city);
person.city = "Hyderabad";
console.log("===>> " + person.city);

console.log(person);
person.height = 5.5;
console.log(person);
delete person.age;
console.log(person);

var a = [1, 2, 3, 4, 5];
a[0] = 10;
console.log(a);

console.log(9 / "a");
