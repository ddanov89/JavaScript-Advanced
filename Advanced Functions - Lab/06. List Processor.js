function listProcessor(input) {

    let array = [];

    let listObject = {

        add: str => array.push(str),
        remove: str => (array = array.filter(el => el !== str)),
        print: () => console.log(array.join(",")),
    }

    input.forEach(element => {
        const [command, value] = element.split(" ")
        listObject[command](value);
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);