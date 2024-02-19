function sumRange(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
        //throw new TypeError('Must give array');
    }
    if (start < 0) {
        start = 0;
    }
    if (end >= arr.length) {
        end = arr.length - 1;
    }

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }
    return sum;
    // console.log(sum);
}
sumRange([10, 20, 30, 40, 50, 60], 3, 300);
sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
sumRange([10, 'twenty', 30, 40], 0, 2);
sumRange([], 1, 2);
sumRange('text', 0, 2);