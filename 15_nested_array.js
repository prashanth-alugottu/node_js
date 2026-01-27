//1. Given a 2D array of numbers, write a function that returns the sum of all elements.

var arr_2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(arr_2d.length);
function sumofArray(arr) {
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
}
console.log(sumofArray(arr_2d));

// =======================================================================================
console.log("==============================");

// 2. Write a function to flatten a 2D array into a 1D array.

var arr_2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function convert2D_1D(arr) {
  var arr_1d = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      arr_1d.push(arr[i][j]);
    }
  }
  return arr_1d;
}
console.log(convert2D_1D(arr_2d));

// =======================================================================================
console.log("==============================");

//3. Write a function that finds and returns the maximum element in a 2D array.
var arr_2d = [
  [1, 2, 3],
  [4, 15, 6],
  [7, 8, 9],
];

function max_ele(arr) {
  max_ele = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (max_ele < arr[i][j]) {
        max_ele = arr[i][j];
      }
    }
  }
  return max_ele;
}

console.log("Max number : ", max_ele(arr_2d));

// =======================================================================================
console.log("==============================");

// Write a function called makeXOGrid which takes in two parameters, rows and columns, and
// returns an array of arrays with the number of values in each subarray equal to the
// columns parameter and the number of subarrays equal to the rows parameter. The values in
// the sub-arrays should switch between "X" and "O".

function makeXOGrid(r, c) {
  xogrid = [];
  for (i = 0; i < r; i++) {
    xogrid[i] = [];
    for (j = 0; j < c; j++) {
      if (j % 2 == 0) {
        xogrid[i][j] = "X";
      } else {
        xogrid[i][j] = "O";
      }
    }
  }
  return xogrid;
}
console.log("XO Grid : ", makeXOGrid(3, 2));

// =======================================================================================
console.log("==============================");

// Given an array of objects people, return an array containing all the names.
var people = [
  { name: "Raj", age: 30 },
  { name: "Priya", age: 25 },
  { name: "Naveen", age: 27 },
];
console.log(people);
console.log(people[0].name);
function getnames(arr) {
  names_arr = [];
  for (i = 0; i < people.length; i++) {
    names_arr[i] = people[i].name;
  }
  return names_arr;
}
console.log("names arrar : ", getnames(people));

// =======================================================================================
console.log("==============================");

// 8. Write a function to find an object with a specific name in an array of objects and return the complete object with that name.
// (Use people array above for example).

var people = [
  { name: "Raj", age: 30 },
  { name: "Priya", age: 25 },
  { name: "Naveen", age: 27 },
];

function returnobj(people, name) {
  for (i = 0; i < people.length; i++) {
    if (people[i].name == name) {
      return people[i];
    }
  }
}

console.log("Returning obj : ", returnobj(people, "Rasj"));

// =======================================================================================
console.log("==============================");

// 9.
// Write a function to add a new element to people array.
var people = [
  { name: "Raj", age: 30 },
  { name: "Priya", age: 25 },
  { name: "Naveen", age: 27 },
];
function addele(people, obj) {
  // { name: "Raj", age: 30 }
  people.push(obj);
}
addele(people, { name: "Rajjjj", age: 20 });
console.log("Added obj : ", people);

// =======================================================================================
console.log("==============================");

// 10.
// Write a function that checks people array for an object with a specific name and returns boolean value.

// 11.
// Given an array of objects with a price property, calculate the sum of all prices.
// var products = [
// { name: 'Product A', price: 100 }, { name: 'Product B', price: 200 }, { name: 'Product C', price: 300 }
// 12.
// Write a function to find the product with the minimum price in products arrays.

// =======================================================================================
console.log("==============================");

// 13. Copy the given nestedObject from https://pastebin.com/QmvCzAj8 and console log
//  the switzerland population.

var nestedObject = {
  speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000,
          },
        },
      },
    },
    languages: {
      spanish: {
        hello: "Hola",
      },
      french: {
        hello: "Bonjour",
      },
    },
  },
};
console.log(
  "Swis population : ",
  nestedObject.data.continents.europe.countries.switzerland.population,
);

// =======================================================================================
console.log("==============================");

// 14. Write a function addSpeaker to add a speaker to the array of speakers.
// The speaker you add must be an object with a key of name and a value of whatever you'd like.
// need examples
var speakers = [];
function addSpearker(value) {
  speakers.push({ name: value });
  return speakers;
}

console.log(addSpearker("chinnu"));

// =======================================================================================
console.log("==============================");

// 15. Write a function addLanguage that adds a language to the languages object.
// The language object you add should have a key with the name of the language and the value
// of another object with a key of "hello" and a value of however you spell
//  "hello" in the language you add.
// =====> need examples
lanobj = {};

function addLanguage(language, spelling) {
  lanobj[language] = { hello: spelling };
}

addLanguage("telugu", "తెలుగు");
addLanguage("English", "English");
console.log("Language obj : ", lanobj);

// 16.
// Vrite a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
// Copy details object from https://pastebin.com/nbc1aKyp and console log all the values in citiesLivedin array.
// 18.
// Write a function called displayHometownData that console logs all the values inside of hometown object.
// 19.
// Write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the details object and returns the details object.

// =======================================================================================
console.log("20. ==============================");

// 20. Copy nestedData from https://pastebin.com/FOxdgJBZ and do the following exercises.
// Using a for loop, console.log all of the numbers in the primeNumbers array.
// Using a for loop, console.log all of the even Fibonnaci numbers.
// Console.log the value "second" inside the order array.
// Invoke the addSnack function and add the snack "chocolate".

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      this.snacks.push(snack);
      return this;
    },
  },
};
primeArray = nestedData.innerData.numberData.primeNumbers;
for (i = 0; i < primeArray.length; i++) {
  console.log(primeArray[i]);
}
