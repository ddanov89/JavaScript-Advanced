function townsToJson(data) {
    // data[0].split("|").map(x => x.trim()).filter( x => !!x);
    for (let town of data) {
        let [name, latitude, longitude] = town.split(" | ");
        latitude = Number(latitude);
        longitude = Number(longitude);
        let result = {
            town: name,
            latitude,
            longitude
        };
        console.log(result);
    }
}
townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);