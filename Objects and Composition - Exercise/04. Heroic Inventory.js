function heroicInventory(arr) {
    let heroRegister = [];

    for (let tokens of arr) {
        let [name, level, itemsString] = tokens.split(" / ");
        let items = [];
        if (typeof itemsString !== "undefined") {
            items = itemsString.split(", ");
        }
        let hero = {
            name,
            level: Number(level),
            items: items,
        };
        heroRegister.push(hero);
    }
    let json = JSON.stringify(heroRegister);
    // console.log(json);
    return json;
}
// heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
heroicInventory(['Jake / 1000 ']);