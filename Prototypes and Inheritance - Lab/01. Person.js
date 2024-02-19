function createPerson(firstName, lastName) {

    const person = {
        firstName,
        lastName,
    };

    Object.defineProperty(person, 'fullName', {

        enumerable: true,
        configurable: true,

        get() {
            return `${person.firstName} ${person.lastName}`;
        },

        set(value) {
            [person.firstName, person.lastName] = value.split(' ');
        }
    });

    return person;
}

let myPerson = createPerson("Peter", "Ivanov");
console.log(myPerson.fullName); //Peter Ivanov
myPerson.firstName = "George";
console.log(myPerson.fullName); //George Ivanov
myPerson.lastName = "Peterson";
console.log(myPerson.fullName); //George Peterson
myPerson.fullName = "Nikola Tesla";
console.log(myPerson.firstName); //Nikola
console.log(myPerson.lastName); //Tesla
console.log('--------');
let myPerson2 = createPerson("Albert", "Simpson");
console.log(myPerson2.fullName); //Albert Simpson
myPerson2.firstName = "Simon";
console.log(myPerson2.fullName); //Simon Simpson
myPerson2.fullName = "Peter Dinklige";
console.log(myPerson2.firstName); // Simon
console.log(myPerson2.lastName); // Simpson