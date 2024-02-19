function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(x => x.addEventListener('click', onClickHandler));

    function onClickHandler(e) {
        let hiddenInfo = e.currentTarget.parentElement.querySelector('div');
        let currentRadioBtn = e.target.parentElement.querySelector("input[type='radio']:checked");
        if (e.currentRadioBtn.textContent === "Show more") {
            e.currentTarget.textContent = "Hide it";
            hiddenInfo.style.display = "none";
        }else {
            e.currentTarget.textContent = "Show more";
            hiddenInfo.style.display = "block";
        }
    }
}