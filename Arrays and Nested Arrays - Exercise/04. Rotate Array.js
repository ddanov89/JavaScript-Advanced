function rotateArray(arr, step) {
    for (let i = 0; i < step; i++) {
        let number = arr.pop();
        arr.unshift(number);
    }
    console.log(arr.join(" "));
}
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);