function wordsUppercase(text) {
    console.log(text
    .split(/[^a-zA-Z0-9]+/)
    .join(" ")
    .trim()
    .split(" ")
    .map(x => x.toUpperCase())
    .join(", "));
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');