const fibonacci = function(number) {

let fibArray = [0, 1];
if (number < 0) {
    return "OOPS"
}
else
{
  for (let index = 2; index < 30; index++) {
    const element = fibArray[index - 1] + fibArray[index - 2];

    fibArray.push(element);
    }
    return fibArray[number];  
}

};

// Do not edit below this line
module.exports = fibonacci;

//SOLVED