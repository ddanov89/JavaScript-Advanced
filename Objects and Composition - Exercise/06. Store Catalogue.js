function storeCatalog(arr) {
    
    let categories = new Map();

    for (let tokens of arr) {
        let [name, price] = tokens.split(" : ");
        price = Number(price);
        categories.set(name, price);
    }
    let sortedKeys = Array.from(categories.keys()).sort(sort);
    let firstLetter = sortedKeys[0][0];
    console.log(firstLetter);
    for (let key of sortedKeys) {
        if (key[0] !== firstLetter) {
            firstLetter = key[0];
            console.log(firstLetter);
        }
        console.log(`${key}: ${categories.get(key)}`);
    }
    function sort(a, b) {
        return a.localeCompare(b);
    }
}
storeCatalog(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
// storeCatalog(['Banana : 2', 'Rubic's Cube : 5','Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10']);