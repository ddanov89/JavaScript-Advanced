function validate() {
    let inputRef = document.getElementById('email');
    inputRef.addEventListener('change', onChange);

    let pattern = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

    function onChange(event) {
        
        if (event.target.value.match(pattern)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}