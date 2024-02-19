function pirates(arr) {

    let command = arr.shift();
    let towns = new Map();

    while (command !== "Sail") {
        let [name, population, gold] = command.split("||");
        if (!towns.has(name)) {
            let town = {
                name,
                population: Number(population),
                gold: Number(gold),
            };
            towns.set(name, town);
        } else {
            let town = towns.get(name);
            town.population += Number(population);
            town.gold += Number(gold);
        }
        command = arr.shift();
    }
    command = arr.shift();
    while (command !== "End") {
        let commandInfo = command.split("=>");
        if (commandInfo[0] == "Plunder") {
            let name = commandInfo[1];
            let population = Number(commandInfo[2]);
            let gold = Number(commandInfo[3]);
            let town = towns.get(name);
            town.population -= population;
            town.gold -= gold;
            console.log(`${name} plundered! ${gold} gold stolen, ${population} citizens killed."`);
            if (town.population <= 0 || town.gold <= 0) {
                towns.delete(name);
                console.log(`${name} has been wiped off the map!`);
            }
        } else if (commandInfo[0] == "Prosper") {
            let name = commandInfo[1];
            let gold = Number(commandInfo[2]);
            let town = towns.get(name);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                town.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${name} now has ${town.gold} gold.`);
            }
        }
        command = arr.shift();
    }
    if (towns.size > 0) {
        console.log(`Ahoy, Captain! There are ${towns.size} wealthy settlements to go to:`);
        for (let [name, town] of towns.entries()) {
            console.log(`${name} -> Population: ${town.population} citizens, Gold: ${town.gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
}
// pirates(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]);
pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"]);