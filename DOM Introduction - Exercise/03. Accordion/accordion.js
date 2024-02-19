function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let divEl = document.getElementById('extra');
    if (button.textContent == "More") {
        button.textContent = "Less";
        divEl.style.display = "block";
    } else {
        button.textContent = "More";
        divEl.style.display = "none";
    }
}