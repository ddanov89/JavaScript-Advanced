function diagonalSums(matrix) {
    let main = 0;
    let second = 0;
    for (let i = 0; i < matrix.length; i++){
        main += matrix[i][i];
        second += matrix[i][matrix.length - 1 - i];
    }
    console.log(main, second);
}
diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);