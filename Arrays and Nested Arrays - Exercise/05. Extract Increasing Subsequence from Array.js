function extractIncreasingSubsetFromArray(arr) {
    let biggestOne = Number.MIN_SAFE_INTEGER;
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue >= biggestOne) {
            biggestOne = currentValue;
            accumulator.push(biggestOne);
        }
        return accumulator;
    }, []);
}
console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// extractIncreasingSubsetFromArray([1, 2, 3, 4]);
// extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]);