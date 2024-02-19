class Stringer {
    string;
    length;
    innerLength;
    innerString;

    constructor(string, length) {
        this.innerLength = length;
        this.innerString = string;
    }

    increase(length) {
        return this.innerLength += length;

    }

    decrease(length) {
        if (typeof (length) == 'number') {
            this.innerLength -= length;
            if (this.innerLength < 0) {
                this.innerLength = 0;
            }
        }
    }

    toString() {
        if (this.innerLength < this.innerString.length) {
            return this.innerString.substring(0, this.innerLength) + "...";
        } else {
            return this.innerString;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test