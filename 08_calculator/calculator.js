const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
	let sumOfArr = 0;
  for (let i = 0; i < arr.length; ++i){
    sumOfArr += arr[i];
  }
  return sumOfArr;
};

const multiply = function(arr) {
  let mult = 1;
  for (let i = 0; i < arr.length; ++i){
    mult *= arr[i];
  }
  return mult;

};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(input) {
  let fact = 1;
  while (input >= 1) {
    fact *= input;
    input--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
