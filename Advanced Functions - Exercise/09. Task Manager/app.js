function solve() {
    const formRef = document.querySelector("form");

    const [addTask, openTask, inProgress, complete] = document.querySelectorAll("section");

    btnHandlerEnum = {
        start:function (e) {
        let currentArticle = e.target.parentElement.parentElement;
        removeBtn(e.target.parentElement)
        currentArticle.innerHTML += getBtnPartial({classes: 'red', text: 'Delete'}, {classes: 'orange', text: 'Finish'});
        let btns = currentArticle.querySelectorAll('button');
        addEventListenerToButtons(btns);
        inProgress.appendChild(currentArticle);
        },
        finish: function (e) {
            let currentArticle = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement);
            complete.appendChild(currentArticle);
        },
        delete:function (e) {
            e.target.parentElement.parentElement.remove();
        }
    }
    formRef.addEventListener('submit', onSubmitHandler);

    function onSubmitHandler(e) {
        e.preventDefault();
        let formElements = e.target.elements;
        let taskName = formElements[0].value;
        let desc = formElements[1].value;
        let date = formElements[2].value;
        if (!taskName || !desc || !date) {
            return;
        }
        createArticle(taskName, desc, date);
        clearForm(formElements);
    }
    function clearForm(formElements) {
        formElements[0].value = "*";
        formElements[1].value = "";
        formElements[2].value = "";
    }
    function createArticle(name, desc, date) {
        let newArticle = document.createElement('article');
        newArticle.innerHTML = getArticleTemp(name, desc, date);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll('button');
        addEventListenerToButtons(btns);
    }
    function clickHandler(e) {
        let currentAction = e.target.innerHTML.toLowerCase();
        btnHandlerEnum[currentAction](e);
    }
    function addEventListenerToButtons(buttons) {
        Array.from(buttons).forEach(button => button.addEventListener('click', clickHandler));
    }
    function getArticleTemp(name, desc, date) {
        return `<h3>${name}</h3>` +
        `<p>Description: ${desc}</p>` +
        `<p>Due Date: ${date}</p>` +
        getBtnPartial({classes:"green", text: "Start"}, {classes: 'red', text: 'Delete'});
    }
    function getBtnPartial(button1, button2) {
        return `<div class ="flex">` +
        `<button class = ${button1.classes}>${button1.text}</button>` +
        `<button class = ${button2.classes}>${button2.text}</button>` +
        `</div>`;
    }
    function removeBtn(target) {
        target.remove();
    }
}