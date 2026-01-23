for (i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("=======================");

var num = 0;
while (num <= 10) {
  console.log(num);
  num++;
}

console.log("=======================");
var num1 = 0;
do {
  console.log(num1);
  num1++;
} while (num1 <= 10);

console.log("=======================");

for (i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("=======================");

for (i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log("=======================");
num3 = 0;
for (i = 0; i <= 10; i++) {
  num3 += i;
}
console.log(num3);

console.log("=======================");

num4 = 0;
for (i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    num4 += i;
  }
}
console.log(num4);

console.log("=======================");

for (i = 0; i <= 10; i++) {
  for (j = 0; j <= 5; j++) {
    console.log(j);
  }
  console.log(i);
}

console.log("=======================");
for (i = 1; i <= 10; i++) {
  for (j = 0; j <= 10; j++) {
    console.log(i + "*" + j + "= " + i * j);
  }
  console.log("==> Completed table ", i);
}
