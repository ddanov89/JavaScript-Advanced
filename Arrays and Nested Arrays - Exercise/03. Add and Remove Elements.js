function addAndRemoveElements(commandArr) {
    let startNumber = 1;
    let result = [];
    for (const command of commandArr) {
        if (command == "add") {
            result.push(startNumber);
            startNumber++;
        } else {
            startNumber++;
            result.pop();
        }
    }
    if (result.length == 0) {
        console.log("Empty");
    }else {
        console.log(result.join("\n"));
    }
}
// addAndRemoveElements(['add', 'add', 'add','add']);
// addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);