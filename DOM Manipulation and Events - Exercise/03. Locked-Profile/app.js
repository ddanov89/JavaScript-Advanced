function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll("button"));
    buttons.forEach(x => x.addEventListener("click", onClickHandler));

    function onClickHandler(e) {
        debugger
        // let hiddenInfo = e.currentTarget.parentElement.querySelector("div");
        // let currentRadioBtn = e.target.parentElement.querySelector("input[type='radio']:checked");

        // if (currentRadioBtn.value === "unlock") {
        //     if (e.currentTarget.textContent === "Show more") {
        //         e.currentTarget.textContent = "Hide it";
        //         hiddenInfo.style.display = "block";
        //     } else {
        //         e.currentTarget.textContent = "Show more";
        //         hiddenInfo.style.display = "none";
        //     }
        // }
    }
}