function sortArray(arr, string) {
    return string === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));


// const sortArr = {
//     asc:(a,b) => a- b,
//     desc: (a,b) => b- a
// };
// return arr.sort(sortArr(string));