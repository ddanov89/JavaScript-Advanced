class FashionRetailInventory {
    storeHouse;
    location;
    productStock;

    constructor(storeHouse, location) {
        this.storeHouse = storeHouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {

        let isPresent = false;

        for (let product of this.productStock) {

            if (product.productName == productName && product.size == size) {

                product.quantity += quantity;
                isPresent = true;

                return `You added ${quantity} more pieces of product ${productName} size ${size}`;
            }
        }

        if (!isPresent) {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }

    sendProduct(productName, size) {

        let isPresent = false;

        for (let i = 0; i < this.productStock.length; i++) {

            if (this.productStock[i].productName == productName && this.productStock[i].size == size) {
                this.productStock.splice(i, 1);

                isPresent = true;

                return `The product ${productName}, size ${size} was successfully removed from the inventory`;
            }
        }

        if (!isPresent) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
    }

    findProductsBySize(size) {

        let result = '';

        let matches = this.productStock.filter(element => element.size == size);

        for (const product of matches) {

            result += `${product.productName}-${product.quantity} pieces, `;
        }
        return result.length > 0
            ? result.substring(0, result.length - 2)
            : `There are no products available in that size`;
    }

    listProducts() {

        let buff = '';

        if (this.productStock.length == 0) {

            return `${this.storeHouse} storehouse is empty`;

        } else {

            buff += `${this.storeHouse} storehouse in ${this.location} available products:\n`;
            let sorted = this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
            for (const product of sorted) {
                buff += `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$\n`;
            }
            return buff;
        }
    }
}

try {
    test4();
} catch (err) {
    console.error(err.message);
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
console.log('-----------------------------');
// const storeHouse2 = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse2.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse2.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse2.sendProduct("T-Shirt", "M"));
// console.log(storeHouse2.sendProduct("Sweather", "M"));
// console.log('-----------------------------');
// const storeHouse3 = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse3.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse3.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse3.findProductsBySize("M"));
// console.log(storeHouse3.findProductsBySize("XL"));
// console.log('-----------------------------');
function test4() {
    const storeHouse4 = new FashionRetailInventory("East", "Milano");
    console.log(storeHouse4.addProduct("Shirt", "M", 10, 25.0));
    console.log(storeHouse4.addProduct("T-Shirt", "M", 10, 25.0));
    console.log(storeHouse4.addProduct("Shirt", "L", 5, 30.0));
    console.log(storeHouse4.addProduct("Shoes", "9", 8, 50.0));
    console.log(storeHouse4.sendProduct("Shoes", "9", 8, 50.0));
    console.log(storeHouse4.listProducts());
}