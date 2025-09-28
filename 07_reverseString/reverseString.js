const reverseString = function(string) {

        let stringArray = [];   
    let workingString = string.split().reverse();

    for (let index = 0; index < workingString.length; index++) {
        
       stringArray.push(workingString[(workingString.length) - index])
          
 
    }
    return(stringArray);

};

// Do not edit below this line
module.exports = reverseString;
