function magicMatrices(arr) {
    let isRowEqual = false;
    let isColumnEqual = false;
    let previousRowSum = arr[0].reduce((acc, currentValue) => acc + currentValue);
    let currentRowSum = 0;
    let previousColumnSum = 0;
    let currentColumnSum = 0;
    for (let j = 0; j < arr[0].length; j++) {
        currentColumnSum = 0;
        for (let i = 0; i < arr.length; i++) {
            currentColumnSum += arr[j][i];
            currentRowSum = arr[i].reduce((acc, currentValue) => acc + currentValue);
            if (currentRowSum == previousRowSum) {
                isRowEqual = true;
            } else {
                isRowEqual = false;
                break;
            }
        }
        if (j == 0) {
            previousColumnSum = currentColumnSum;
            isColumnEqual = true;
        }
        if (currentColumnSum == previousColumnSum) {
            isColumnEqual = true;
        } else {
            isColumnEqual = false;
            break;
        }
    }
    if (currentColumnSum == currentRowSum && isColumnEqual && isRowEqual) {
        console.log("true");
    } else {
        console.log("false");
    }
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);