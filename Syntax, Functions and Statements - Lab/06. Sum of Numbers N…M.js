function sumOfNumbersNM(a, b) {

    let firstNumber = Number(a);
    let secondNumber = Number(b);
    let sum = 0;

    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    console.log(sum);
}
sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');