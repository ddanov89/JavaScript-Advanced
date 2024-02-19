function solve(arr) {

    class Shop {
        foodsInStore;
        soldItems;
        

        constructor(foodsInStore, soldItems) {
            this.foodsInStore = foodsInStore;
            this.soldItems = soldItems;
        }
        receive(foodName, quantity) {
            if (!this.foodsInStore.has(foodName)) {
                this.foodsInStore.set(foodName, quantity);
            } else {
                let itemsQuantity = this.foodsInStore.get(foodName);
                this.foodsInStore.set(foodName, Number(itemsQuantity + quantity));
            }
        };
        sell(foodName, quantity) {
            if (!this.foodsInStore.has(foodName)) {
                console.log(`You do not have any ${foodName}.`);
            } else {
                if (this.foodsInStore.get(foodName) < quantity) {
                    let availableQuantity = Number(this.foodsInStore.get(foodName));
                    this.soldItems += availableQuantity;
                    this.foodsInStore.delete(this.foodName);
                    console.log(`There aren't enough ${foodName}. You sold the last ${availableQuantity} of them.`);
                } else {
                    let availableQuantity = this.foodsInStore.get(foodName);
                    this.foodsInStore.set(foodName, Number(availableQuantity - quantity));
                    this.soldItems += Number(quantity);
                    console.log(`You sold ${quantity} ${foodName}.`);
                    if (this.foodsInStore.get(foodName) == 0) {
                        this.foodsInStore.delete(foodName);
                    }
                }
            }
        }
    }
    let shop = new Shop(new Map(), 0);

    let command = arr.shift();
    while (command !== "Complete") {
        let [action, quantity, name] = command.split(" ");
        if (action == "Receive") {
            shop.receive(name, quantity);
        } else {
            shop.sell(name, quantity);
        }
        command = arr.shift();
    }
    for (let [name, quantity] of shop.foodsInStore.entries()) {
        console.log(`${name}: ${quantity}`);
    }
    console.log(`All sold: ${shop.soldItems}`);
}
solve(["Receive 105 cookies",
    "Receive 10 donuts",
    "Sell 10 donuts",
    "Sell 1 bread",
    "Complete"]);
// solve(["Receive 10 muffins",
//     "Receive 23 bagels",
//     "Sell 5 muffins",
//     "Sell 10 bagels",
//     "Complete"]);