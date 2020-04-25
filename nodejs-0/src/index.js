"use strict";

const fibonacci = () => {
  var fib = [0, 1];
  var element = 0;

  for (let index = 2; element <= 350; index++) {
    element = fib[index - 2] + fib[index - 1];
    fib[index] = element;
  }
  return fib;
};

const isFibonnaci = (num) => {
  const fib = fibonacci();
  for (let index = 0; index < fib.length; index++) {
    if (num === fib[index]) {
      return true;
    }
  }
  return false;
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
