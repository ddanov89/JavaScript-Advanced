function carFactory(car) {
    let carOrder = {};

    let engine = {};

    let carriage = {
        type: car.carriage,
        color: car.color,
    };

    if (car.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (car.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else {
        engine.power = 200;
        engine.volume = 3500;
    }
    if (car.wheelsize % 2 == 0) {
        car.wheelsize -= 1;
    }

    carOrder.model = car.model;
    carOrder.engine = engine;
    carOrder.carriage = carriage;
    
    carOrder.wheels = Array(4).fill(car.wheelsize);
    return carOrder;
}
// carFactory({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// });
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});