// setInterval(() => {
//   console.log("Hi");
// }, 2000);

setTimeout(() => {
  console.log("set timeout");
}, 1000);

function hello(name) {
  console.log(`I am a ${name}`);
}

setTimeout(hello, 3000, "hello");

setInterval(intervals, 5000, "chinnu");

function intervals(name) {
  console.log(`Hi my name is ${name}`);
}
