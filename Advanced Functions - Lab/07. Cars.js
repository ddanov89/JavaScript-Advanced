function cars(input) {
    let data = {};

    let commandObj = {
        create: (name) => {
            let car = {};
            data[name] = car;
        },
        inherit: (parentName, name) => {
            let parentCar = data[parentName];
            let child = Object.create(parentCar);
            data[name] = child;
        },
        set: (name, key, value) => {
            
        },
        printC: (name) => {
            let car = data[name];

            for (let [key, value] of Object.entries(car)) {
                console.log(`${key}:${value}`);
            }
        }
    };
    input.forEach(element => {

        let commandInfo = element.split(" ");
        if (commandInfo.includes('inherit')) {
            commandObj['inherit'](commandInfo[3], commandInfo[1]);
        } else if (commandInfo.includes("set")) {
            commandObj['set'](commandInfo[1], commandInfo[2], commandInfo[3]);
        } else if (commandInfo.includes("create")) {
            commandObj['create'](commandInfo[1]);
        } else if (commandInfo.includes("print")) {
            commandObj['printC'](commandInfo[1]);
        }
    });
}
cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);