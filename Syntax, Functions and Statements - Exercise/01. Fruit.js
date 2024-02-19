function fruits(fruit, weight, price) {
    let weightInKilograms = weight / 1000;
    let finalPrice = weightInKilograms * price;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80);
// fruits('apple', 1563, 2.35);