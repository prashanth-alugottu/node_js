var res = (a, b) => a + b;

console.log(res(1, 3));

let isEven = (num) => (num % 2 == 0 ? true : false);

console.log(isEven(1));

let arrayMult = (numarry) => {
  new_a = [];
  for (i = 0; i < numarry.length; i++) {
    new_a.push(numarry[i] * 2);
  }
  return new_a;
};

console.log(arrayMult([1, 2, 3]));

// More Array
let sampleArr = [1, 2, 3, 4, "prasg"];
sampleArr.forEach(function (name, index, elements, g) {
  console.log(
    `name : ${name} and a index : ${index} and elemrnt third param : ${elements}`,
  );
});

// ========================================================================
console.log("\n====== using filter ===========");
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let res1 = arr.filter(function (x) {
  return x % 2 == 0;
});
console.log("used traditional function : ", res1);

let res2 = arr.filter((x) => x % 2 == 0);
console.log("used arrow function used == : ", res2);

let res3 = arr.filter((x) => x % 2 === 0);
console.log("used arrow function used === : ", res3); // ===  it will check even element and data type of element

// Reduce

var arr1 = [10, 20, 30, 40];
let res4 = arr1.reduce((acc, ele) => {
  return acc + ele;
}, 1);
console.log(`Reduces array : ${res4}`); // It will give you one result

var res5 = arr1.map((num) => {
  return num * 2;
});

console.log(`Map array : ${res5}`); // It will give you res for each element and gives arry in return

var res6 = arr1.map((num, index) => {
  return index + num;
});
console.log(res6);

// sort
console.log("=============== SORT ==============");
var arrr = [3, 4, 2, 5, 1];
console.log(arrr);
let res7 = arrr.sort((a, b) => console.log(a, b));
console.log(res7);

let res8 = arrr.sort((a, b) => a - b);
console.log("Ascending : ", res8);

let res9 = arrr.sort((a, b) => b - a);
console.log("Descending : ", res9);

var fruits = ["apple", "Apple", "orang", "greps"];
console.log(fruits.sort());

const users = [
  { id: 3, name: "banti", age: 45 },
  { id: 1, name: "chinnu", age: 10 },
  { id: 2, name: "chanti", age: 30 },
];
let resuser = users.find((user) => user.id == 2);
console.log(resuser);

let sor_age = users.sort((a, b) => a.age - b.age);
console.log(sor_age);

console.log("=============================");
var arrr1 = [1, 3, 2, 4, 7, 6, 5, 8, 9];

oddres = arrr1.filter((a) => a % 2 != 0);
console.log("Odd res : ", oddres);
console.log("ddddd", arrr1);
console.log("=============================");
console.log(arrr1);
var sumpos = arrr1.reduce((x, y) => {
  console.log(x, y);
  sum = 0;
  if (x > 0) {
    sum + x;
  }
  return sum;
}, 0);
console.log(sumpos);

console.log("========  this  =====================");

// this

var obj = {
  name: "chinnu",
  age: 10,
  showthis: () => {
    return this;
  },
};

console.log(obj.showthis());

var obj1 = {
  name: "chinnu",
  age: 10,
  showthis: function () {
    return this;
  },
};

console.log(obj1.showthis());
console.log("============================= ", this);

function show() {
  console.log(this);
}

show();
