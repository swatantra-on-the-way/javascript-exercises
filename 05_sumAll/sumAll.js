const sumAll = (start, end) => {
    if (typeof(start) != 'number' || typeof(end) != 'number' || start < 0 || end < 0){
        return 'ERROR';
    }
    let sum = 0;
    if (start > end){
        let tmp;
        tmp = start;
        start = end;
        end = tmp;
    }
    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
