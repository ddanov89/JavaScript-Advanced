function squareOfStars(input) {
    const star = '* ';
    if (input === null || input === ' ' || input === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(`${(star.repeat(5)).trim()}`);
        }
    } else {
        for (let i = 0; i < input; i++) {
            console.log(`${(star.repeat(input)).trim()}`);
        }
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);