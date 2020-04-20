// Print Square Exercise

function printSquare(size) {
    let brick = "*";
    let count = 0;
    while (count < size) {
        console.log(brick.repeat(size));
        count ++;
    }
}

printSquare(5);
