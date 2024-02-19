function storeCatalog(arr) {

    let catalog = {};

    for (let tokens of arr) {
        let [name, price] = tokens.split(" : ");
        catalog[name] = price;
    }
    let sortedKeys = Array.from(Object.keys(catalog)).sort(sort);
    let firstLetter = sortedKeys[0][0];
    console.log(firstLetter);
    for (const key of sortedKeys) {
        if (firstLetter !== key[0]) {
            firstLetter = key[0];
            console.log(firstLetter);
        }
        console.log(`  ${key}: ${catalog[key]}`);
    }
    function sort(a, b) {
        return a.localeCompare(b);
    }
}
storeCatalog(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);