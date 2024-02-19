class InventoryManager {
    capacity;
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (this.items.length >= this.capacity) {
            throw new Error("The inventory is already full.");
        }
        const itemMatch = this.items.find(item => item.itemName == itemName);
        if (itemMatch) {
            itemMatch.quantity += quantity;
        } else {
            let item = {
                itemName,
                quantity,
            };
            this.items.push(item);
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`;

    }
    sellItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        const itemMatch = this.items.find(item => item.itemName == itemName);
        if (!itemMatch) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }
        if (quantity > itemMatch.quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }
        itemMatch.quantity -= quantity;
        if (itemMatch.quantity == 0) {
            let itemIndex = this.items.findIndex(item => {
                return item.itemName == itemName;
            });
            this.items.splice(itemIndex, 1);
            this.outOfStock.push(itemMatch.itemName);
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }
    restockItem(itemName, quantity) {

        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        const itemMatch = this.items.find(item => item.itemName == itemName);
        if (itemMatch) {
            itemMatch.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }
        const itemMatchOutOfStock = this.outOfStock.find(item => item == itemName);
        if (itemMatchOutOfStock) {
            let outOfStockIndex = this.outOfStock.findIndex(item => {
                return item == itemName;
            });
            this.outOfStock.splice(outOfStockIndex, 1);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }
    getInventorySummary() {

        let summary = `Current Inventory:\n`;
        summary += `${this.items.map(({ itemName, quantity }) => `${itemName}: ${quantity}`).join('\n')}`;
        if (this.outOfStock.length > 0) {
            summary += `\nOut of Stock: ${this.outOfStock.join(", ")}`;
        }
        return summary;
    }
}

try {
    test1();
} catch (error) {
    console.log('--------------Test1--------------');
}
try {
    test2();
} catch (error) {
    console.log('--------------Test2--------------');

}
try {
    test3();
} catch (error) {
    console.log('--------------Test3--------------');
}
try {
    test4();
} catch (error) {
    console.log('--------------Test4--------------');

}


function test1() {
    const manager = new InventoryManager(2);
    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Level", 3));
}



function test2() {
    const manager = new InventoryManager(3);
    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Chisel", 3));
    console.log(manager.sellItem("Drill", 3));
    console.log(manager.sellItem("Paintbrush", 2));
}

function test3() {
    const manager = new InventoryManager(3);
    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Chisel", 3));
    console.log(manager.sellItem("Drill", 3));
    console.log(manager.restockItem("Drill", 5));
    console.log(manager.restockItem("Paintbrush", 1));
}

function test4() {
    const manager = new InventoryManager(3);
    console.log(manager.addItem("Drill", 10));
    console.log(manager.addItem("Hammer", 5));
    console.log(manager.addItem("Chisel", 3));
    console.log(manager.sellItem("Drill", 3));
    console.log(manager.sellItem("Hammer", 5));
    console.log(manager.restockItem("Drill", 5));
    console.log(manager.restockItem("Paintbrush", 1));
    console.log(manager.getInventorySummary());
}