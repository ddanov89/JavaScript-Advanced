function tickets(arr, sortingCriteria) {

    let destinationArr = [];

    for (let i = 0; i < arr.length; i++) {
        let [destination, price, status] = arr[i].split("|");
        price = Number(price);
        let ticket = {
            destination,
            price,
            status
        };
        destinationArr.push(ticket);
    }
    return destinationArr.sort((a, b) => 
    sortingCriteria == 'price' 
    ? a[sortingCriteria] - b[sortingCriteria]
    : a[sortingCriteria].localeCompare(b[sortingCriteria]));

}
// tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination');
// console.log(tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'status'));
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price'));