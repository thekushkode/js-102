// For and While Loops for Print Numbers Ex.

function printNumbers(startNum, endNum) {
    for (let i = startNum; i <= endNum; i++) {
        console.log(i)
    }
}

printNumbers(2, 12);

function printNumbers(startNum, endNum) {
    i = startNum;
    while (i <= endNum) {
        console.log(i);
        i++;
    }
}

printNumbers(2, 12);