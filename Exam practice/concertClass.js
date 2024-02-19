function concert(arr) {

    class Band {
        name;
        bandMembers;
        time;
        constructor(name, bandMembers, time){
            this.name = name;
            this.bandMembers = bandMembers;
            this.time = Number(time);
        }
        
        Add(name, bandMembersArr){
            if (!concert.has(name)) {

                let band = {
                    name,
                    bandMembers: bandMembersArr,
                    time: 0,
                };
                concert.set(name, band);
            } else {
                let band = concert.get(name);

                bandMembersArr.forEach(bandMember => {
                    if (!band.bandMembers.includes(bandMember)) {
                        band.bandMembers.push(bandMember);
                    }
                });
            }
        }

        Play(name, time){
            if (!concert.has(name)) {

                let band = {
                    name,
                    bandMembers: [],
                    time: time,
                };
                concert.set(name, band);
                totalTimePlayed += time;
            } else {
                let band = concert.get(name);
                band.time = time;
                totalTimePlayed += time;
            }
        }
    }

    let command = arr.shift();
    let concert = new Map();
    let totalTimePlayed = 0;

    while (command !== "Start!") {
        let [action, name, bandInfo] = command.split("; ");
        if (action == "Add") {
            let members = bandInfo.split(", ");
            let bandMembersArr = [];
            for (let member of members) {
                bandMembersArr.push(member);
            }
            let band = new Band(name, bandMembersArr, 0);
            band.Add(name, bandMembersArr, 0);
        } else if (action == "Play") {
            let time = Number(bandInfo);
            let band = new Band(name, [], time);
            band.Play(name, time)
        }
        command = arr.shift();
    }

    console.log(`Total time: ${totalTimePlayed}`);
    for (let [name, band] of concert.entries()) {
        console.log(`${name} -> ${band.time}`);
    }
    let bandNames = concert.entries().next().value;
    console.log(`${bandNames[0]}`);
    let band = concert.get(bandNames[0]);
    for (let member of band.bandMembers) {
        console.log(`=> ${member}`);
    }
}
concert(["Play; The Beatles; 2584", "Add; The Beatles; John Lennon, George Harrison, Ringo Starr", "Add; The Beatles; Paul McCartney, George Harrison", "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards", "Play; The Rolling Stones; 4239", "Start!"]);
// concert(["Add; The Beatles; John Lennon, Paul McCartney", "Add; The Beatles; Paul McCartney, George Harrison", "Add; The Beatles; George Harrison, Ringo Starr", "Play; The Beatles; 3698", "Play; The Beatles; 3828", "Start!"]);
// concert(["Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr", "Play; The Beatles; 4569", "Play; The Beatles; 2456", "Play; Queen; 1250", "Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon", "Play; Queen; 6215", "Start!"]);