function calorieObject(arr) {

    let calorieObject = {};

    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let calories = Number(arr[i + 1]);
        calorieObject[product] = calories;
    }
    let result = '{ ';
    for (let [product, calories] of Object.entries(calorieObject)) {
        result += `${product}: ${calories}, `;
    }
    result = result.substring(0, result.length - 2);
    console.log(result + " }");
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);

function calorieObject(arr) {
    let calorieObject = {};
    for (let i = 0; i < arr.length; i += 2) {
        calorieObject[arr[i]] = Number(arr[i + 1]);
    }
    console.log(calorieObject);
}