function biggestElement(matrix) {
    let max = matrix[0][0];

    for (let row of matrix) {
        for (let col of row) {
            if (col > max) {
                max = col;
            }
        }
    }
    console.log(max);
}
biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
// matrix => Math.max(...matrix.flat());