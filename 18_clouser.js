function outerFunction() {
  var outerVariable = "I am from the outer function scope";
  function innerFunction() {
    // console.log(outerVariable);
    return outerVariable;
  }
  return innerFunction;
}
let closureFunction = outerFunction();
console.log(closureFunction());
// =================================================================================
let greet = createGreeter("Chinnnu");
console.log(greet());

function createGreeter(str) {
  function innerFunc() {
    return str;
  }
  return innerFunc;
}

// =================================================================================

var count = createCounter();
count();
count();
count();

function createCounter() {
  var count = 0;
  function innerFunc() {
    console.log(count++);
  }
  return innerFunc;
}
