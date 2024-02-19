function addItem() {
    let input = document.getElementById('newItemText');
    if (input.value == 0) {
        return;
    }

    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete);
    const list = document.getElementById('items');
    liElement.appendChild(deleteBtn);
    list.appendChild(liElement);

    input.value = '';

    function onDelete() {
        liElement.remove();
    }
}