function autoEngineeringCompany(arr) {

    let carRegister = {};

    for (let tokens of arr) {

        let [brand, model, producedCount] = tokens.split(" | ");

        if (!carRegister.hasOwnProperty(brand)) {

            let modelInfo = {
                model,
                producedCount: Number(producedCount),
            };

            carRegister[brand] = new Array(modelInfo);

        } else {

            let modelArr = carRegister[brand];
            let isModelIncluded = false;

            modelArr.forEach(element => {

                if (element.model == model) {
                    element.producedCount += Number(producedCount);
                    isModelIncluded = true;
                }
            });

            let modelInfo = {
                model,
                producedCount: Number(producedCount),
            };

            if (!isModelIncluded) {
                modelArr.push(modelInfo);
            }
        }
    }
    for (let [brand, model] of Object.entries(carRegister)) {

        console.log(`${brand}`);

        for (let currentCar of Object.values(model)) {

            console.log(`###${currentCar.model} -> ${currentCar.producedCount}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000', 'Audi | Q6 | 100', 'BMW | X5 | 1000', 'BMW | X6 | 100', 'Citroen | C4 | 123', 'Volga | GAZ-24 | 1000000', 'Lada | Niva | 1000000', 'Lada | Jigula | 1000000', 'Citroen | C4 | 22', 'Citroen | C5 | 10']);