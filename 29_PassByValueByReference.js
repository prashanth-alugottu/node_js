function hello(a) {
  a++;
  console.log(a);
}

var a = 20; // primitive data types pass by value not a reference which means a
//  copy of primitive is sent to the method
// If any changes made in the method which will not effect the original param
hello(a);
console.log(a);

// primitive data tyes : number, string, boolean, null, undefined

// =================================================================

// Now Pass by refence like object and array

var obj = {
  name: "chinnu",
  age: 20,
};
function changeAge() {
  obj.age = 25;
}
console.log(obj);
changeAge();
console.log(obj);
