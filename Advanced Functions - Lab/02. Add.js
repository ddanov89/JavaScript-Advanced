function solution(number) {

    return function (number2) {
        return number + number2;
    } 
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
// let add7 = solution(7);
// console.log(add7(2));
// console.log(add7(3));