var names = ["Amit", "Sita", "Ravi", "Neha", "Sunita"];
// Print the first and last names in the below array.
var first = names[0];
console.log("First names ", first);

var second = names[names.length - 1];
console.log("second names ", second);

// =======================================================================================
// Write a function that takes two arguments an array and a value and returns the index of a given value in the array. If the element is not found, return -1.
function indexofArray(array, value) {
  return array.indexOf(value);
}
console.log(indexofArray(names, "sitass"));

// =======================================================================================

// Write a function that removes all duplicate elements from an array.
function removeDuplicates(array) {
  var uniq = [];
  for (i = 0; i < array.length - 1; i++) {
    console.log("2");
    console.log(array[i]);
    if (!uniq.includes(array[i])) {
      uniq.push(array[i]);
    }
  }
  return uniq;
}
var namearray = ["Amit", "Sunita", "Sunita", "Sunita", "Sunita"];
console.log("Removed Duplicates : ", removeDuplicates(namearray));

// =======================================================================================

// Write a program that takes array of numbers as a parameter and returns sum of its elements.
function sumOfEle(num) {
  var sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
var nums = [1, 2, 5];
console.log(sumOfEle(nums));

// =======================================================================================

// Write a function findLargest that returns largest number from array of numbers.

function largest(nums) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
  }
  return nums[nums.length - 1];
}
var nums = [1, 5, 5, 9, 0, 8, 2, 333];
console.log("Largets is : ", largest(nums));

// =======================================================================================

// 18. Write a function mergeArrays (arr1, arr2) that takes two arrays and returns a new array containing all elements from both arrays.
function mergeArray(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  }
  return arr2;
}
var arr1 = [1, 3, 4, 5];
var arr2 = [4, 5, 6, 6];
console.log("Merged Array. : ", mergeArray(arr1, arr2));

// =======================================================================================

// Write a function findDuplicates(arr) that returns an array of duplicate elements in the array arr.
function findDuplicates(arr) {
  seen = [];
  duplicates = [];

  for (i = 0; i < arr.length; i++) {
    if (seen.includes(arr[i])) {
      if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    } else {
      seen.push(arr[i]);
    }
  }
  return duplicates;
}
var arr1 = [1, 3, 4, 5, 5, 3, 4, 5, 2, 1];
console.log("Duplicates arr : ", findDuplicates(arr1));

// =======================================================================================
console.log("==============================");
// 20. Write a function sumExceptFirstLast(arr) that returns the sum of all elements except the first and last elements of the array
function sumExceptFL(arr) {
  sum = 0;
  for (i = 1; i < arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
}

var arr1 = [1, 3, 4, 5];
console.log("Sum Except First and LAst : ", sumExceptFL(arr1));

// =======================================================================================
console.log("==============================");

// 23. Write a function to find the intersection of two arrays.
// Eg: array1 = [1,2,3,4,5], array2 = [2,5,7,9,0]
// answer = [2,5]
function intersection(arr1, arr2) {
  intersectArray = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersectArray.push(arr1[i]);
    }
  }
  return intersectArray;
}
array1 = [1, 2, 3, 4, 5, 5];
array2 = [2, 5, 7, 9, 0, 4, 5, 5];

console.log("Intersect Array : ", intersection(array1, array2));

// =======================================================================================
console.log("==============================");

// 24. Write a function to find maximum number of times an element is repeated in an array.
// Eg: arr = [1,2,3,2,1,6,9,2]
// answer = 3 as value 2 is repeated maximum number of times in the array.

function max_repeat(arr) {
  console.log(arr);
  freq = {};
  maxvalue = 0;
  for (i = 0; i < arr.length; i++) {
    key = arr[i];
    values = (freq[key] || 0) + 1;
    freq[key] = values;
    if (freq[key] > maxvalue) {
      maxvalue = freq[key];
    }
  }
  return freq[maxvalue];
}
arr111 = [1, 2, 3, 2, 3, 3];
console.log("Max iterated number : ", max_repeat(arr111));

// 25.
// Write an array with 10 elements. These could be numbers, words, sentences etc. Write a simple JavaScript program to join all elements of the array into a string.
