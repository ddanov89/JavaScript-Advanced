function focused() {
    let inputs = Array.from(document.querySelectorAll('input'));

    for (let input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }
    
    function onFocus(event) {
        event.target.parentElement.classList.add('focused');
    }

    function onBlur(e) {
        e.target.parentElement.classList.remove('focused');
    }
}