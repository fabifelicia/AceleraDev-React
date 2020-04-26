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
  return fibonacci().includes(num);
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
