function townPopulation(input) {
    const result = {};
    for (let line of input) {
        let [name, population] = line.split(" <-> ");

        if (result.hasOwnProperty(name) == false) { // if ( name in result)
            result[name] = 0;
        }
        result[name] += Number(population);
    }

    for (let name in result) {
        console.log(name, ':', result[name]);
    }
}
townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);