function createSortedList() {

    let sortedList = [];

    function checkIndex(index) {
        if (index < 0 || index >= this.size) {
            return true;
        }
        return false;
    }
    function sortArr(a, b) {
        return a - b;
    }

    let result = {
        add: function (el) {
            if (typeof (el) !== "number" || isNaN(el)) {
                return;
            }
            sortedList.push(Number(el));
            sortedList.sort(sortArr);
            this.size = sortedList.length;
        },
        remove: function (index) {
            if (checkIndex(index)) {
                return;
            }
            sortedList.splice(index, 1);
            sortedList.sort(sortArr);
            this.size = sortedList.length;
        },
        get: function (index) {
            if (checkIndex(index)) {
                return
            }
            return sortedList[index];
        },
        size: 0,
    };
    return result;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.size);
console.log(list.get(1));