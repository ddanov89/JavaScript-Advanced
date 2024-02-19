function sortingNumbers(numbers) {
    let result = [];
    numbers.sort((a, b) => a - b);
    let length = numbers.length;

    for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
        result.push(numbers[i]);
        result.push(numbers[length - (i + 1)]);
        if (length % 2 !== 0 && i + 1 === Math.floor(length / 2)) {
            result.push(numbers[length - (i + 2)]);
        }
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);