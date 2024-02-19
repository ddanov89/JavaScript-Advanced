function createCard(face, suit) {

    let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validCardSuits = ['S', 'H', 'D', 'C'];

    let suitMap = new Map([
        ['S', "\u2660"],
        ['H', "\u2665"],
        ['D', "\u2666"],
        ['C', "\u2663"]
    ]);

    if (!validCardFaces.includes(face) || !validCardSuits.includes(suit)) {
        throw new Error(`Invalid card: ${card}`);
    }

    let card = {

        toString: () => {
            return face + suitMap.get(suit);
        }
    }
    return card;
}