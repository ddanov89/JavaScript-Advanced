function filterEmployees(data, criteria) {
    let inputObject = JSON.parse(data);
    let filtered = [];
    if (criteria == "all") {
        filtered = inputObject;
    } else {
        let criteriaInfo = criteria.split('-');
        filtered = inputObject
            .filter(employee => employee[criteriaInfo[0]] == criteriaInfo[1]);
    }
    filtered.forEach((element, index) => {
        console.log(`${index}. ${element.first_name} ${element.last_name} - ${element.email}`);
    });
}
filterEmployees(`[
    {"id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female"}, 
    { "id": "2", "first_name": "Kizzee", "last_name": "Jost", "email": "kjost1@forbes.com", "gender": "Female"},
    {"id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com","gender": "Male" }
]`, 'gender-Female');
filterEmployees(`[
    {"id": "1", "first_name": "Kaylee", "last_name": "Johnson", "email": "k0@cnn.com", "gender": "Female"}, 
    {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female"}, 
    { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, 
    { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }
]`, 'last_name-Johnson');