window.addEventListener('load', solve);

function solve() {

    const nameRef = document.getElementById('name');
    const emailRef = document.getElementById('email');
    const contactNumberRef = document.getElementById('contact-number');
    const preferredClassRef = document.getElementById('class-type');
    const preferredTimeRef = document.getElementById('class-time');

    let name;
    let email;
    let contactNumber;
    let preferredClass;
    let preferredTime;

    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', onNextClick);

    let previewRef = document.querySelector('.class-info');
    let confirmRef = document.querySelector('.confirm-class');
    let bodyRef = document.getElementById('body');

    let liEl;

    let editBtn = create('button', 'Edit');
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', onEditHandler);
    let continueBtn = create('button', 'Continue');
    continueBtn.className = 'continue-btn';
    continueBtn.addEventListener('click', onContinueHandler);
    let cancelBtn = create('button', 'Cancel');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.addEventListener('click', onCancelHandler);
    let confirmBtn = create('button', 'Confirm');
    confirmBtn.className = 'confirm-btn';
    confirmBtn.addEventListener('click', onConfirmHandler);

    function onConfirmHandler() {

        let divEl = document.getElementById('main');
        divEl.remove();
        let h1El = create('h1', null);
        h1El.setAttribute('id', 'thank-you');
        h1El.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
        let doneBtn = create('button', 'Done');
        doneBtn.setAttribute('id', 'done-btn');
        doneBtn.addEventListener('click', onDoneHandler);
        bodyRef.appendChild(h1El);
        bodyRef.appendChild(doneBtn);
    }
    function onDoneHandler() {
        location.reload();
    }

    function onCancelHandler() {
        liEl.remove();
        nextBtn.disabled = false;
    }

    function onNextClick(e) {

        e.preventDefault();

        name = nameRef.value;
        email = emailRef.value;
        contactNumber = contactNumberRef.value;
        preferredClass = preferredClassRef.value;
        preferredTime = preferredTimeRef.value;

        if (name == "" || email == "" || contactNumber == "" || preferredClass == "" || preferredTime == "") {
            return;
        }

        liEl = create('li', null);
        liEl.className = 'info-item';

        let article = create('article', null);
        article.className = 'personal-info';
        article.appendChild(create('p', `${name}`));
        article.appendChild(create('p', `${email}`));
        article.appendChild(create('p', `${contactNumber}`));
        article.appendChild(create('p', `${preferredClass}`));
        article.appendChild(create('p', `${preferredTime}`));
        liEl.appendChild(article);
        liEl.appendChild(editBtn);
        liEl.appendChild(continueBtn);

        nextBtn.parentElement.reset();

        nextBtn.disabled = true;
        previewRef.appendChild(liEl);
    }

    function onEditHandler() {

        liEl.remove();
        nameRef.value = name;
        emailRef.value = email;
        contactNumberRef.value = contactNumber;
        preferredClassRef.value = preferredClass;
        preferredTimeRef.value = preferredTime;
        nextBtn.disabled = false;
    }

    function onContinueHandler() {

        liEl.remove();
        liEl.removeChild(editBtn);
        liEl.removeChild(continueBtn);
        liEl.appendChild(cancelBtn);
        liEl.appendChild(confirmBtn);
        confirmRef.appendChild(liEl);

    }

    function create(type, content) {
        const element = document.createElement(type);
        if (content) {
            element.textContent = content;
        }
        return element;
    }
}