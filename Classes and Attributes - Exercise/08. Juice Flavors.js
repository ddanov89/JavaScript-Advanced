function juiceFlavours(arr) {
    let juiceCollection = {};
    let bottles = {};
    for (let element of arr) {
        let [name, qty] = element.split(" => ");
        qty = Number(qty);
        if (juiceCollection.hasOwnProperty(name)) {
            juiceCollection[name] += qty;
        } else {
            juiceCollection[name] = qty;
        }
        if (juiceCollection[name] >= 1000) {
            bottles[name] = juiceCollection[name] / 1000;
        }
    }
    Object.keys(bottles).forEach((key) => console.log(`${key} => ${Math.trunc(bottles[key])}`))
}
/*
function juiceFlavours(arr) {

    let juiceMap = new Map();
    let juiceBottleMap = new Map();


    for (let i = 0; i < arr.length; i++) {
        let [name, juiceQty] = arr[i].split(" => ");
        juiceQty = Number(juiceQty);
        if (juiceMap.has(name)) {
            let qty = juiceMap.get(name);
            qty += juiceQty;
            juiceMap.set(name, qty);
            if (qty > 1000) {
                let bottles = Math.floor(qty / 1000);
                let bottleObj = {
                    bottles,
                    qty,
                };
                juiceBottleMap.set()
            }
        } else {
            juiceMap.set(name, juiceQty);
        }
    }
    for (let [name, qty] of juiceMap.entries()) {
        let bottles = Math.floor(qty / 1000);
        if (bottles < 1) {
            juiceMap.delete(name);
        } else {
            juiceMap.set(name, bottles);
            console.log(`${name} => ${bottles}`);
        }
    }
} */
// juiceFlavours(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549']);
juiceFlavours(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789']);