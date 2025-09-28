const getTheTitles = function(array) {

    const books = array.map(isBook);
    console.log(books)
    return books
};

function isBook(array2)
{    
    // console.log(array2.title)
    return array2.title;

}

// Do not edit below this line
module.exports = getTheTitles;


// SOLVED