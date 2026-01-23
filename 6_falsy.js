if (0) {
  console.log("This will not execute");
} else {
  console.log("0 is Falsy");
}
console.log("====================");
if ("") {
  console.log("This will not execute");
} else {
  console.log("A empty string is Falsy");
}

console.log("====================");

if (42) {
  console.log("A non-zero number is truthy.");
} else {
  console.log("This will not execute");
}

console.log("====================");

var name = "Prashnrth";
if (name) {
  console.log("It is truthy value");
} else {
  console.log("It is Falsy value");
}
