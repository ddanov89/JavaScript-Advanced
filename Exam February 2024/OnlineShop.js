class OnlineShop {

    warehouseSpace;
    constructor(warehouseSpace) {

        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {

        if (this.warehouseSpace < spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }
        this.products.push({
            product,
            quantity
        });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {

        const data = this.findProduct(product);
        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }
        if (data.quantity >= minimalQuantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - data.quantity;
            data.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const data = this.findProduct(product);
        data.quantity--;
        this.sales.push({
            product,
            quantity: 1
        });
        return `The ${product} has been successfully sold.`;
    }
    
    revision() {

        if (this.sales.length == 0) {
            throw new Error('There are no sales today!');
        }
        const result = [
            `You sold ${this.sales.length} products today!`,
            'Products in the warehouse:'
        ];
        for (let {product, quantity} of this.products) {
            result.push(`${product}-${quantity} more left`);
        }
        return result.join('\n');
    }

    findProduct(product){

        const data = this.products.find(p => p.product == product);
        if (!data) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        return data;
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.loadingStore('TV', 40, 500));
console.log('--------------------------------------');
const myOnlineShop2 = new OnlineShop(500)
console.log(myOnlineShop2.loadingStore('headphones', 10, 200));
console.log(myOnlineShop2.loadingStore('laptop', 5, 200));
console.log(myOnlineShop2.quantityCheck('headphones', 10));
console.log(myOnlineShop2.quantityCheck('laptop', 10));
console.log(myOnlineShop2.quantityCheck('TV', 40,));
console.log('--------------------------------------');
const myOnlineShop3 = new OnlineShop(500)
console.log(myOnlineShop3.loadingStore('headphones', 10, 200));
console.log(myOnlineShop3.loadingStore('laptop', 5, 200));
console.log(myOnlineShop3.quantityCheck('headphones', 10));
console.log(myOnlineShop3.quantityCheck('laptop', 10));
console.log(myOnlineShop3.sellProduct('headphones'));
console.log(myOnlineShop3.sellProduct('laptop'));
console.log(myOnlineShop3.sellProduct('keyboard'));
console.log('--------------------------------------');
const myOnlineShop4 = new OnlineShop(500)
console.log(myOnlineShop4.loadingStore('headphones', 10, 200));
console.log(myOnlineShop4.loadingStore('laptop', 5, 200));
console.log(myOnlineShop4.quantityCheck('headphones', 10));
console.log(myOnlineShop4.quantityCheck('laptop', 10));
console.log(myOnlineShop4.sellProduct('headphones'));
console.log(myOnlineShop4.sellProduct('laptop'));
console.log(myOnlineShop4.revision());