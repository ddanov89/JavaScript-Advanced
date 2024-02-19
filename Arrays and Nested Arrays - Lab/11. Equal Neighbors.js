function equalNeighbors(arr) {
    let neighbors = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] == arr[i + 1][j]) {
                neighbors++;
            }
            if (arr[i][j] == arr[i][j - 1]) {
                neighbors++;
            }
        }
    }
    for (let l = 0; l < arr[arr.length - 1].length; l++) {
        if (arr[arr.length - 1][l] == arr[arr.length - 1][l + 1]) {
            neighbors++;
        }
    }
    for (let l = 0; l < arr.length - 1; l++) {
        if (arr[l][0] == arr[l + 1][0]) {
            neighbors++;
        }
    }
    console.log(neighbors);
}
equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);