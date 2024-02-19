function deleteByEmail() {
    let input = document.querySelector('[name="email"]').value;
    let list = Array.from(document.querySelectorAll('tbody tr'));
    let tableBodyRef = document.querySelector('table#customers tbody');
    let result = document.getElementById('result');
    let isDeleted = false;

    list.forEach(element => {
        if (element.children[1].textContent == input) {
            tableBodyRef.removeChild(element);
            result.textContent = 'Deleted.';
            isDeleted = true;
        }
    });
    if (isDeleted == false) {
        result.textContent = 'Not found.'
    }
}