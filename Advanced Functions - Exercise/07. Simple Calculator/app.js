function calculator() {

    let firstElement;
    let secondElement;
    let resultElement;

    return {

        init: (selector1, selector2, resultSelector) => {
            firstElement = document.querySelector(selector1);
            secondElement = document.querySelector(selector2);
            resultElement = document.querySelector(resultSelector);
            
        },
        add:()=> {
            let sum = Number(firstElement.value) + Number(secondElement.value);
            resultElement.value = sum;
        },
        subtract: () => {
            let subtraction = Number(firstElement.value) - Number(secondElement.value);
            resultElement.value = subtraction;
        }
    }
}