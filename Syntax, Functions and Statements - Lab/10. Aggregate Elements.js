function aggregateElements(arr) {
    let sum = 0;
    let concatenatedString = arr.toString();
    let inverseSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        inverseSum += 1 / arr[i];
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(concatenatedString.split(",").join(''));
}
aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);