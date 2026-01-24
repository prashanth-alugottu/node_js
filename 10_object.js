var user = {
  name: "Prashtn",
  age: 23,
  city: "Hyderabad",
};

// Accessing using dot notation
console.log(user.name);

// Accessing using bracket notation
console.log(user["age"]);

// updating value in param with using dot notation
user.name = "Chanti";
console.log("After changed  with using dot notation : ", user);

// updating value in param with using bracket notation
user["name"] = "Sai";
console.log("After changed with using bracket notation : ", user);

// Adding a new property

user.company = "Wipro";
console.log(user);

delete user.age;
console.log("After deleting the age property : ", user);

// add method as a value for the key of object
// Example :
var person = {
  name: "Prashtn",
  age: 23,
  city: "Hyderabad",
  greet: function () {
    console.log("HellO I am from greet from person1");
  },
};

console.log(person.greet());

var person2 = {
  name: "Prashtn",
  age: 23,
  city: "Hyderabad",
  greet() {
    console.log("HellO I am from greet from person2");
  },
};

console.log(person2.greet());

// Adding methods to exsting obj

var obj = {
  name: "Chanti",
  age: 22,
};
console.log(obj);

obj.newMethod = function () {
  console.log("Hello from Adding method to exsting obj");
};

console.log(obj);
obj.newMethod();

// ====================================================================================
var obj1 = {
  name: "Chanti",
  age: 12,
  company: "TCS",
  getCompany: function () {
    console.log(this.age);
  },
};
obj1.getCompany();

var obj3 = {
  name: "Chanti",
  age: 12,
  company: "TCS",
  info: function () {
    console.log(
      `name : ${this.name}, Age is : ${this.age} and company is : ${this.company}`,
    );
  },
};

obj3.info();
// ====================================================================================
var balance = {
  total: 1000,
  add: function (x) {
    this.total = this.total + x;
    console.log(`${x} is added from the total`);
  },
  sub: function (y) {
    this.total = this.total - y;
    console.log(`${y} is reduced in the total`);
  },
};
console.log(`Total balance : ${balance.total}`);
balance.add(2);
console.log(`After adding the total balance : ${balance.total}`);
balance.sub(2);
console.log(`After sub the total balance : ${balance.total}`);

// ====================================================================================
console.log("=======Some other ways to create an object======");
// Some other ways to create an object
// 1. Object Constructor
var firstObj = new Object();
firstObj.name = "Prashnth";
firstObj.age = 22;
console.log(firstObj);
