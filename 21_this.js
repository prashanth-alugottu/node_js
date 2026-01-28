function show() {
  //   console.log("In side show() : ", this);
  return this;
}
console.log(show());

// console.log("Out side show() or global : ", this);

// const person = {
//   name: "chinnu",
//   age: 22,
//   greet() {
//     console.log(this);
//   },
// };

// person.greet();

// const person1 = {
//   name: "chinnu",
//   greet() {
//     const arrowFunction = () => {
//       console.log(this.name);
//     };
//     arrowFunction();
//   },
// };

// person1.greet();
