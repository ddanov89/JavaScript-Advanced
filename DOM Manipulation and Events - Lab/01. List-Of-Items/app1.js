function addItem() {
    let input = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    let liElement = document.createElement("li");
    if (input.length > 0) {
        liElement.textContent = input;
        list.appendChild(liElement);
    }
}