function showEvenNum(array) {
    for (const number of array) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}
console.log('Even numbers are:');
showEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function showOddNum(array) {
    for (const number of array) {
        if (number % 2 !== 0) {
            console.log(number);
        }
    }
}
console.log('Odd numbers are:');
showOddNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);