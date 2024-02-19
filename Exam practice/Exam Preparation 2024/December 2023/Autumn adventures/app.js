window.addEventListener('load', solve);

function solve() {
    
    let timeValue;
    let dateValue;
    let placeValue;
    let eventValue;
    let contactsValue;

    let addEventBtnRef = document.getElementById('add-btn');
    let editBtnRef = createElement('button');
    let continueBtnRef = createElement('button');
    let moveToFinishedBtnRef = createElement('button');
    let clearBtnRef = document.getElementById('clear');


    addEventBtnRef.addEventListener('click', clickHandler);
    editBtnRef.addEventListener('click', onEditHandler);
    continueBtnRef.addEventListener('click', onContinueHandler);
    moveToFinishedBtnRef.addEventListener('click', moveToFinishedHandler);
    clearBtnRef.addEventListener('click', onClearHandler);

    function onClearHandler(event) {

        let ulArr = Array.from(document.getElementById('finished-list').children);
        ulArr.forEach(element => {
            element.remove();
        });
    }

    function moveToFinishedHandler(event) {

        let finishedRef = document.getElementById('finished-list');
        let liEl = document.getElementById('upcoming-list').children[0];

        finishedRef.appendChild(liEl);

        let ulArr = Array.from(document.getElementById('upcoming-list').children);
        ulArr.forEach(element => {
            element.remove();
        });
        liEl.removeChild(moveToFinishedBtnRef);
    }

    function onContinueHandler(event) {

        let upcomingRef = document.getElementById('upcoming-list');
        let liEl = document.getElementById('check-list').children[0];
        liEl.removeChild(editBtnRef);
        liEl.removeChild(continueBtnRef);

        upcomingRef.appendChild(liEl);

        let ulArr = Array.from(document.getElementById('check-list').children);
        ulArr.forEach(element => {
            element.remove();
        });
        liEl.appendChild(moveToFinishedBtnRef);
        moveToFinishedBtnRef.textContent = 'Move to Finished';
        moveToFinishedBtnRef.classList.add('finished-btn');
        addEventBtnRef.disabled = false;
    }

    function clickHandler(event) {

        timeValue = document.getElementById('time').value;
        dateValue = document.getElementById('date').value;
        placeValue = document.getElementById('place').value;
        eventValue = document.getElementById('event-name').value;
        contactsValue = document.getElementById('email').value;

        if (timeValue == "" || dateValue == "" || placeValue == "" || eventValue == "" || contactsValue == "") {
            return;
        }

        let lastCheckSection = document.getElementById('check-list');

        let articleElement = createElement('article');
        let liEl = createElement('li');
        let pElDateTime = createElement('p');
        let pElPlace = createElement('p');
        let pElEvent = createElement('p');
        let pElContact = createElement('p');

        pElDateTime.textContent = `Begins: ${dateValue} at: ${timeValue}`;
        pElPlace.textContent = `In: ${placeValue}`;
        pElEvent.textContent = `Event: ${eventValue}`;
        pElContact.textContent = `Contact: ${contactsValue}`;

        liEl.classList.add('event-content');

        articleElement.appendChild(pElDateTime);
        articleElement.appendChild(pElPlace);
        articleElement.appendChild(pElEvent);
        articleElement.appendChild(pElContact);

        liEl.appendChild(articleElement);
        lastCheckSection.appendChild(liEl);

        document.getElementById('time').value = '';
        document.getElementById('date').value = '';
        document.getElementById('place').value = '';
        document.getElementById('event-name').value = '';
        document.getElementById('email').value = '';

        addEventBtnRef.disabled = true;


        editBtnRef.textContent = 'Edit';
        continueBtnRef.textContent = 'Continue';
        editBtnRef.classList.add('edit-btn');
        continueBtnRef.classList.add('continue-btn');
        liEl.appendChild(editBtnRef);
        liEl.appendChild(continueBtnRef);

    }

    function onEditHandler(event) {

        document.getElementById('time').value = timeValue;
        document.getElementById('date').value = dateValue;
        document.getElementById('place').value = placeValue;
        document.getElementById('event-name').value = eventValue;
        document.getElementById('email').value = contactsValue;


        let ulArr = Array.from(document.getElementById('check-list').children);
        ulArr.forEach(element => {
            element.remove();
        });
        addEventBtnRef.disabled = false;
    }

    function createElement(type) {
        return document.createElement(type);
    }
}