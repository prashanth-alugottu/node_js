var name = "Prashanth";
// console.log(name[0]);
console.log(name.charAt("a"));

var str1 = "hello";
var str2 = "World";

res = str1.concat(str2);
console.log(res);

// ========================================================================
console.log("======================================");

console.log("Cancate with some , . / - ect : ", str1.concat("--", str2));

// ========================================================================
console.log("======================================");

console.log("Word : ", str1);
console.log("includes or not str1.includes('hel') : ", str1.includes("hel"));
console.log("includes or not str1.includes('Hel') : ", str1.includes("Hel"));

// ========================================================================
console.log("======================================");
var oldStr = "Hell0";
newStr1 = oldStr.replace("H", "PP");
newStr2 = oldStr.replace("h", "PP");
console.log(oldStr);
console.log(newStr1);
console.log(newStr2);

// ========================================================================
console.log("=============== Slice =======================");

var slicestr = "Heelo";
newstr = slicestr.slice(1, 5);
newstr = slicestr.slice(1, 2);
console.log("Sliced slicestr.slice(1, 2) : ", slicestr.slice(1, 2));
console.log("Sliced slicestr.slice(0, 2) : ", slicestr.slice(0, 2));
console.log("Sliced slicestr.slice(0) : ", slicestr.slice(0));
console.log("Sliced slicestr.slice(1,4) : ", slicestr.slice(1, 4));
console.log("Sliced slicestr.slice(0,5) : ", slicestr.slice(0, 5));

// ========================================================================
console.log("=============== Reverse String =======================");

//4. Write a function that takes a string as input and returns reversed string.

function reverseStr(str) {
  var letter = "";
  var letter1 = "";
  for (i = str.length - 1; i >= 0; i--) {
    letter1 = str[i];
    letter = letter.concat(letter1);
  }
  return letter;
}
console.log("".concat("pp"));
console.log("Reverse str : ", reverseStr("Hellp"));

// ========================================================================
console.log("\n=============== palindrome =======================");

// 5. Write a function that checks if a given string is a palindrome (a word that reads the same backward as forward). Eg: level

var str1 = "pop";
var reversedStr = reverseStr(str1);
if (str1 == reversedStr) {
  console.log("Polyndrome");
} else {
  console.log("Not Polyndrome");
}

// ========================================================================
console.log("\n=============== number of vowels =======================");

//6. Write a function that counts the number of vowels (a, e, i, o, u) in a given string and returns the count.

function vouwelsCount(str) {
  var count = 0;
  vowels = "aeiouAEIOU";
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log("COint of vowels : ", vouwelsCount("aeipppouA"));

// ========================================================================
console.log(
  "\n=============== longest word in the string. =======================",
);

// 7. Write a function that takes a string (a sentence) and returns the longest word in the string. If there are multiple words with the same length, return the first one.

function longestWord(sent) {
  var words = sent.split(" ");
  var longestWord = "";
  var longestCount = 0;
  for (i = 0; i < words.length; i++) {
    var size = words[i].length;
    if (size > longestCount) {
      longestCount = size;
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(
  "First Longest word in the sentense : ",
  longestWord("Welcome to Hyderabaf  Hyderabad "),
);

// ========================================================================

// Write a function that capitalizes the first letter of each word in a given string.
// Write a function that counts the number of times a specific character appears in a string.
// 9.
// 10.
// 11.
// Write a function that removes duplicate characters from a string.
// Write a function that checks if two given strings are anagrams (contain the same characters in a different order).

// ========================================================================
console.log(
  "\n=============== swaps the case of each character . =======================",
);

// 12. Write a function that swaps the case of each character in a string.
// Eg: swap("Hello World") //Output: hELLO wORLD
function isUpper(char) {
  if (char >= "a" && char <= "z") {
    console.log(`${char} is lower case `);
    return false;
  }
  if (char >= "A" && char <= "Z") {
    console.log(`${char} is Upper case `);
    return true;
  }
}

function swap(str) {
  var swaped = "";
  for (i = 0; i < str.length; i++) {
    if (isUpper(str[i])) {
      swaped = swaped.concat(str[i].toLowerCase());
    } else {
      swaped = swaped.concat(str[i].toUpperCase());
    }
  }
  return swaped;
}

console.log("Swapped : ", swap("Pras#L"));

// ========================================================================
console.log(
  "\n=============== reverses the order of words . =======================",
);

// 13. Write a function that reverses the order of words in a sentence.
// Eg: reverseWords ('Hello world from JavaScript'); I| 'JavaScript from world Hello'
function reverswords(sent) {
  wordsArray = sent.split(" ");
  wordsArray = wordsArray.reverse();
  wordsArray = wordsArray.join(" ");
  return wordsArray;
}

console.log(reverswords("Hello world from JavaScript"));

// ========================================================================
console.log(
  "\n=============== most frequently occurring character in a string.. =======================",
);
// 14. Write a function that finds the most frequently occurring character in a string.
// Eg: mostFrequentChar ('aabbbccccd')); // 'c'

function mostFrequentChar(str) {
  var freq = {};
  var max = 0;
  max_char = "";
  for (i = 0; i < str.length; i++) {
    ch = str[i];
    freq[ch] = (freq[ch] || 0) + 1;
    if (freq[ch] > max) {
      max = freq[ch];
      max_char = ch;
    }
  }
  return max_char;
}
console.log("Max count char : ", mostFrequentChar("aabbbccccd"));

// ========================================================================
console.log(
  "\n=============== reverses the letters in each word of a sentence. =======================",
);

// 15. Write a function that reverses the letters in each word of a sentence.
// Eg: reverseLettersInWords ('Hello world'); Il 'olleH dIrow'

function reverseLettersInWords(sent) {
  wordArray = sent.split(" ");
  resArray = [];
  for (i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    reversChar = "";
    for (j = word.length - 1; j >= 0; j--) {
      var char = word[j];
      reversChar = reversChar.concat(char);
    }
    resArray.push(reversChar);
  }
  return resArray.join(" ");
}

console.log("Reverse words : ", reverseLettersInWords("Hello world"));
