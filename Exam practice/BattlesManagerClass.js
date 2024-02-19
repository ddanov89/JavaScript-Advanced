function battleManager(arr) {

    class BattleManager {

        battles;

        constructor(battles) {
            this.battles = battles;
        }

        Add(name, health, energy) {

            if (!battles.has(name)) {
                let person = {
                    name,
                    health: Number(health),
                    energy: Number(energy),
                }
                this.battles.set(name, person);

            } else {
                let person = this.battles.get(name);
                person.health += health;
            }
        }
        Attack(attackerName, defenderName, damage) {

            let defenderRecord = battles.get(defenderName);
            let attackerRecord = battles.get(attackerName);
            if (this.battles.has(defenderName) && this.battles.has(attackerName)) {
                defenderRecord.health -= damage;
                attackerRecord.energy--;
            }
            if (defenderRecord.health <= 0) {
                this.battles.delete(defenderName);
                console.log(`${defenderName} was disqualified!`);
            }
            if (attackerRecord.energy <= 0) {
                this.battles.delete(attackerName);
                console.log(`${attackerName} was disqualified!`);
            }
        }

        Delete(name) {
            if (name == "All") {
                this.battles.clear();
            } else {
                this.battles.delete(name);
            }
        }
    }
    class Person {
        name;
        health;
        energy;
        constructor(name, health, energy) {
            this.name = name;
            this.health = health;
            this.energy = energy
        }
    }

    let index = 0;
    let battles = new Map();

    while (arr[index] !== 'Results') {
        let commandInfo = arr[index].split(":");

        if (commandInfo[0] == "Add") {
            let name = commandInfo[1];
            let health = Number(commandInfo[2]);
            let energy = Number(commandInfo[3]);
            let battleManager = new BattleManager(battles);

            battleManager.Add(name, health, energy);

        } else if (commandInfo[0] == "Attack") {

            let attackerName = commandInfo[1];
            let defenderName = commandInfo[2];
            let damage = Number(commandInfo[3]);
            let battleManager = new Person(attackerName, defenderName, damage);
            battleManager.Attack(attackerName, defenderName, damage);
            
        } else if (commandInfo[0] == "Delete") {
            let name = commandInfo[1];
            let battleManager = new BattleManager(battles);
            battleManager.Delete(name);
        }
        index++;
    }
    console.log(`People count: ${battles.size}`);
    for (let [name, personInfo] of battles.entries()) {
        console.log(`${name} - ${personInfo.health} - ${personInfo.energy}`);
    }
}
battleManager(["Add:Bonnie:3000:5",
    "Add:Johny:4000:10",
    "Delete:All",
    "Add:Bonnie:3333:3",
    "Add:Aleks:1000:70",
    "Add:Tom:4000:1",
    "Results"]);