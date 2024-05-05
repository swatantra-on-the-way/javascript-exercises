const repeatString = function(string, num) {
    tempStr = '';

    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++){
        tempStr += string;
    }
    return tempStr;
};

// Do not edit below this line
module.exports = repeatString;
