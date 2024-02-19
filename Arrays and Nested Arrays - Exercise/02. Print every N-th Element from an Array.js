function printEveryNthElementFromArray(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr[i]);
    }
    return result;
}
printEveryNthElementFromArray(['5', '20', '31', '4', '20'], 2);
printEveryNthElementFromArray(['dsa', 'asd', 'test', 'tset'], 2);
printEveryNthElementFromArray(['1', '2', '3', '4', '5'], 6);