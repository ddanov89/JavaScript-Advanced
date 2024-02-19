function printAnArrayWithAGivenDelimiter(arr, string) {
    let result = arr.join(string);
    console.log(result);
}
printAnArrayWithAGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printAnArrayWithAGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');