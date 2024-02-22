class CarDealership {

    name;

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model == "" || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        } else {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
        }
    }

    sellCar(model, desiredMileage) {
        let soldPrice = 0;
        let car = this.availableCars.find(car => car.model == model);
        if (!car) {
            throw new Error(`${model} was not found!`);
        } else {
            if (car.mileage <= desiredMileage) {
                soldPrice = car.price;
            } else if (Math.abs(car.mileage - desiredMileage) <= 40000) {
                soldPrice = car.price - (car.price * 0.05);
            } else if (Math.abs(car.mileage - desiredMileage) > 40000) {
                soldPrice = car.price - (car.price * 0.1);
            }
            let carIndex = this.availableCars.findIndex(car => car.model == model);
            let removed = this.availableCars.splice(carIndex, 1);
            this.soldCars.push(removed[0]);
            removed[0].price = soldPrice;
            this.totalIncome += soldPrice;
            return `${model} was sold for ${soldPrice.toFixed(2)}$`;
        }
    }
    
    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        } else {
        let result = '-Available cars:\n';
        let carsArr = [];
        this.availableCars.map(car =>
            carsArr.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
        );
        result += carsArr.join('\n');
        return result;
        }
    }

    salesReport (criteria) {
        let sortedCars;
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        if (criteria == 'horsepower') {
            sortedCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria == "model"){
            sortedCars = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        let result = '';
        result += `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`;
        result += `-${this.soldCars.length} cars sold:\n`;
        let soldCarsArr = [];
        sortedCars.map(car => 
            soldCarsArr.push(`---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`));
            result += soldCarsArr.join('\n');
            return result;
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));


// let dealership1 = new CarDealership('SoftAuto');
// console.log(dealership1.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership1.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership1.addCar('Audi A3', 120, 4900, 240000));
// console.log(dealership1.sellCar('Toyota Corolla', 230000));
// console.log(dealership1.sellCar('Mercedes C63', 110000));


// let dealership2 = new CarDealership('SoftAuto');
// console.log(dealership2.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership2.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership2.addCar('Audi A3', 120, 4900, 240000));
// console.log(dealership2.currentCar());


let dealership3 = new CarDealership('SoftAuto');
console.log(dealership3.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership3.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership3.addCar('Audi A3', 120, 4900, 240000));
console.log(dealership3.sellCar('Toyota Corolla', 230000));
console.log(dealership3.sellCar('Mercedes C63', 110000));
console.log(dealership3.salesReport('horsepower'));