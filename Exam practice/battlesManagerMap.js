function battleManager(arr) {
    let index = 0;
    let battles = new Map();

    while (arr[index] !== 'Results') {
        let commandInfo = arr[index].split(":");

        if (commandInfo[0] == "Add") {
            let name = commandInfo[1];
            let health = Number(commandInfo[2]);
            let energy = Number(commandInfo[3]);

            if (!battles.has(name)) {
                let person = {
                    name,
                    health: Number(health),
                    energy: Number(energy),
                };
                battles.set(name, person);

            } else {
                let person = battles.get(name);
                person.health += health;
            }
        } else if (commandInfo[0] == "Attack") {

            let attackerName = commandInfo[1];
            let defenderName = commandInfo[2];
            let damage = Number(commandInfo[3]);

            let defenderRecord = battles.get(defenderName);
            let attackerRecord = battles.get(attackerName);
            if (battles.has(defenderName) && battles.has(attackerName)) {
                defenderRecord.health -= damage;
                attackerRecord.energy--;
            }
            if (defenderRecord.health <= 0) {
                battles.delete(defenderName);
                console.log(`${defenderName} was disqualified!`);
            }
            if (attackerRecord.energy <= 0) {
                battles.delete(attackerName);
                console.log(`${attackerName} was disqualified!`);
            }
        } else if (commandInfo[0] == "Delete") {
            let name = commandInfo[1];
            if (name == "All") {
                battles.clear();
            } else {
                battles.delete(name);
            }
        }
        index++;
    }
    // console.log(`People count: ${battles.size}`);
    // for (let [name, personInfo] of battles.entries()) {
    //     console.log(`${name} - ${personInfo.health} - ${personInfo.energy}`);
    // }
    console.log(battles);
}
// battleManager(["Add:Mark:1000:5", "Add:Clark:1000:2", "Attack:Clark:Mark:500", "Attack:Clark:Mark:800", "Add:Charlie:4000:10", "Results"]);
// battleManager(["Add:Bonnie:3000:5", "Add:Kent:10000:10", "Add:Johny:4000:10", "Attack:Johny:Bonnie:400", "Add:Johny:3000:5", "Add:Peter:7000:1", "Delete:Kent", "Results"]);
battleManager(["Add:Bonnie:3000:5",
"Add:Johny:4000:10",
"Delete:All",
"Add:Bonnie:3333:3",
"Add:Aleks:1000:70",
"Add:Tom:4000:1",
"Results"]);
