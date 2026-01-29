function factorial(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));

function sum(n) {
  if (n == 0) {
    return n;
  }
  return n + sum(n - 1);
}

console.log(sum(4));
