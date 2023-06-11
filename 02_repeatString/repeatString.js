const repeatString = function(word, repeat) {
    if(repeat < 0) return "ERROR";
    let words = "";
    for(let i = 0; i < repeat; i++) {
        words += word;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
