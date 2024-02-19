function processOddPosition(arr) {
    let result = arr.filter((c, i) => i % 2)
    .map(x => x * 2)
    .reverse()
    .join(" ");
    console.log(result);
}
processOddPosition([10, 15, 20, 25]);
processOddPosition([3, 0, 10, 4, 7, 3]);