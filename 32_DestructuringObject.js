obj = {
  name: "chinnu",
  age: 10,
  city: "Hyderabad",
};
console.log(obj);

let { name, age, city } = obj;

console.log(name);
console.log(age);

let { name: renamed_name, age: renamed_age } = obj;
console.log(renamed_name);
console.log(renamed_age);

// 2. Write a function that takes an object and returns a string in the format "name is X and age is Y",
// where X and Y are extracted from object by using destructuring.

let employee = {
  name: "chinu",
  salary: 200000,
  city: "Hydearbaad",
  age: 20,
};
console.log(employee);
function objDestrcturing(employeeObj) {
  let { name: X, age: Y } = employeeObj;
  return `name is ${X} and age is ${Y}`;
}

console.log(objDestrcturing(employee));
