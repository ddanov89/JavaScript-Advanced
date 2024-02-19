function ticTacToe(data) {
    let initialBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let isFirstPlayerPlay = true;
    for (let coordinates of data) {
        let [x, y] = coordinates.split(" ");

        if (initialBoard[x][y]) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }
        let marker = isFirstPlayerPlay ? 'X' : 'O';
        initialBoard[x][y] = marker;
        if (checkWin(initialBoard, marker)) {
            console.log(`Player ${marker} wins!`);
            return printDashboard(initialBoard);
        }
        if (!checkFreeSpace(initialBoard)) {
            console.log('The game ended! Nobody wins :(');
           return printDashboard(initialBoard);
        }
        isFirstPlayerPlay = !isFirstPlayerPlay;
    }

    function printDashboard(dashboard) {
        dashboard.forEach(row => {
            console.log(row.join('\t'));
        });
    }
    function checkFreeSpace(dashboard) {
        return !!dashboard.flat().filter(x => !x).length   
    }

    function checkWin(dashboard, marker) {
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] === marker && dashboard[i][1] === marker && dashboard[i][2] === marker) {
                return true;
            } else if (dashboard[0][i] === marker && dashboard[1][i] === marker && dashboard[2][i] === marker) {
                return true;
            } else if (dashboard[0][0] === marker && dashboard[1][1] === marker && dashboard[2][2] === marker) {
                return true;
            } else if (dashboard[0][2] === marker && dashboard[1][1] === marker && dashboard[2][0] === marker) {
                return true;
            }
        }
    }
}
// ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);