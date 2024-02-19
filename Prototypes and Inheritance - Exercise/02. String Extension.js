(function () {

    String.prototype.ensureStart = function (string) {

        return this.startsWith(string) ? this.toString() : string + this;
    };

    String.prototype.ensureEnd = function (string) {

        return this.endsWith(string) ? this.toString() : this + string;
    }

    String.prototype.isEmpty = function () {

        return !this.toString();
    }

    String.prototype.truncate = function (n) {

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let words = this.split(' ');
            let result = [];
            for (let word of words) {
                if (result.join(' ').length + word.length + 3 <= n) {
                    result.push(word);
                } else {
                    break;
                }
            }
            return result.join(' ') + "...";
        }
        return this.slice(0, n - 3) + '...';
    }

    String.format = function (string, ...parameters) {
        for (let i = 0; i < parameters.length; i++) {
            string = string.replace(`{${i}}`, parameters[i]);
        }
        return string;
    }
})()

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);

str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);