const fib = n => {
  if (n === 0 || n === 1) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
};

const factorial = n => {
  if (n === 0 || n === 1) return 1;
  else {
    return n * fib(n - 1);
  }
};

console.log(factorial(5));
