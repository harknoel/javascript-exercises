const reverseString = function(word) {
    let words = "";
    for(let i = word.length - 1; i >= 0; i--) {
        words += word[i];
    }
    return words;
};

// Do not edit below this line
module.exports = reverseString;
