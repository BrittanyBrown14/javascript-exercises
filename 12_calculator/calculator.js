const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current);
};

const power = function(a, b) {

  return Math.pow(a, b);
};

const factorial = function(a) {
	  if (a === 0) {
      return 1;
    }
    else
    {
      let result = 1;

      while (a > 1) {
      result *= a;
      a--;        
      }
      return result;
    }
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

// SOLVED