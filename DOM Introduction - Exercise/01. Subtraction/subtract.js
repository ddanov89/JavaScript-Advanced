function subtract() {
    const firstNumberRef = document.getElementById('firstNumber');
    const secondNumberRef = document.getElementById('secondNumber');
    const resultRef = document.getElementById('result');

    let firstNumber = Number(firstNumberRef.value);
    let secondNumber = Number(secondNumberRef.value);
    let result = firstNumber - secondNumber;
    resultRef.textContent = result;
}