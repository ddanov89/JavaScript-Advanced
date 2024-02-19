// (arr) => Number(arr.shift()) + Number(arr.pop());
function sumFirstLast(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr[arr.length - 1]);
    console.log(firstElement + lastElement);
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);