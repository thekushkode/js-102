// Print a Box

// .slice(1, array.length-2, "", "")

function printBox(width, height) {
    let space = " ";
    let brick = "*";
    console.log(brick.repeat(width));
    count = 0;
    while (count < (height - 2)) {
        // let rptNum = num2 - 2;
        console.log(brick + space.repeat(width - 2) + brick)
        count ++;
    }
    console.log(brick.repeat(width));
}

printBox(6, 4);
printBox(7, 4);
printBox(5, 6);

// function printSquare(size) {
//     let brick = "*";
//     let count = 0;
//     while (count < size) {
//         console.log(brick.repeat(size));
//         count ++;
//     }
// }