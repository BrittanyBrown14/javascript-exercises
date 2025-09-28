const palindromes = function (text) {
let newText = text.toLowerCase().replace(/\s/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    let rev = newText.split("").reverse().join("");
console.log(newText);
console.log(rev)

    if (rev == newText) {
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;

// SOLVED