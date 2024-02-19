function create(words) {

    let content = document.getElementById('content');

    words.forEach(element => {
        let div = createElement('div');
        let p = createElement('p');
        p.style.display = 'none';
        p.textContent = element;
        div.appendChild(p);
        div.addEventListener('click', clickHandler);
        content.appendChild(div);
    });
    
    function clickHandler(e) {
        e.target.children[0].style.display = "block";
    }

    function createElement(type) {
        return document.createElement(type);
    }
}