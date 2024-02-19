function smallestTwoNumbers(array) {
    let sorted = array.sort((a, b) => a - b);
    let result = sorted.slice(0, 2).join(" ");
    console.log(result);
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);