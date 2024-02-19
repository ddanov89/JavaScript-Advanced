class List {

    numbersArr;
    size;

    constructor(numbersArr = []) {

        this.numbersArr = numbersArr.sort((a, b) => a - b);
        this.size = this.numbersArr.length;
    }

    add(element) {

        this.numbersArr.push(element);
        this.numbersArr.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {

        if (index < 0 || index >= this.numbersArr.length) {
            throw new Error("Index-a ne mu kefi");

        } else {
            this.numbersArr.splice(index, 1);
            this.numbersArr.sort((a, b) => a - b);
            this.size--;
            return;
        }
    }

    get(index) {

        if (index < 0 || index >= this.numbersArr.length) {
            throw new Error("Incorrect index");
        } else {
            return this.numbersArr[index];
        }
    }
}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1))