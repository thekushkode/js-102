//Function that prints the factors of a given number

function factors(num1) {
    let myFactors = [];
    for (let count = 0; count <= num1; count++) {
        let test = num1 % count;
        if (test === 0) {
            myFactors.push(count);
        }
    }
    console.log(myFactors);
}

factors(100);
factors(50);
factors(100);
factors(1000);