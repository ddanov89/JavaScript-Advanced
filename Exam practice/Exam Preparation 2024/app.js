window.addEventListener("load", solve);

function solve() {

  let snowmanName = document.getElementById('snowman-name');
  let height = document.getElementById('snowman-height');
  let locationRef = document.getElementById('location');
  let creator = document.getElementById('creator-name');
  let specialAttribute = document.getElementById('special-attribute');

  let snowmanNameValue;
  let heightValue;
  let locationValue;
  let creatorValue;
  let specialAttributeValue;

  let previewSectionRef = document.querySelector('.snowman-preview');
  let snowListSectionRef = document.querySelector('.snow-list');
  let mainSectionRef = document.getElementById('hero');
  let bodySectionRef = document.querySelector('.body');
  let imgRef = document.getElementById('back-img');

  let liEl;
  let article;

  let btnContainer = create('div', null);
  btnContainer.className = 'btn-container';

  let editBtn = create('button', 'Edit');
  editBtn.className = 'edit-btn';
  editBtn.addEventListener('click', onEditHandler);

  let nextBtn = create('button', 'Next');
  nextBtn.className = 'next-btn';
  nextBtn.addEventListener('click', onNextHandler);

  let addBtnRef = document.querySelector('.add-btn');
  addBtnRef.addEventListener('click', onAddHandler);

  let sendBtn = create('button', 'Send');
  sendBtn.className = 'send-btn';
  sendBtn.addEventListener('click', onSendHandler);
  let backBtn = create('button', 'Back');
  backBtn.className = 'back-btn';
  backBtn.addEventListener('click', onBackHandler);

  function onBackHandler() {
    location.reload();
    debugger
  }

  function onSendHandler() {
    mainSectionRef.remove();
    bodySectionRef.appendChild(backBtn);
    imgRef.removeAttribute('hidden');
    debugger

  }

  function onNextHandler() {

    liEl.remove();

    liEl.classList.remove('snowman-info');
    liEl.classList.add('snowman-content');

    article.appendChild(sendBtn);

    snowListSectionRef.appendChild(liEl);

    btnContainer.remove();
    debugger
  }

  function onEditHandler() {
    
    liEl.remove();
    snowmanName.value = snowmanNameValue;
    height.value = heightValue;
    locationRef.value = locationValue;
    creator.value = creatorValue;
    specialAttribute.value = specialAttributeValue;

    editBtn.remove();

    nextBtn.remove();

    addBtnRef.disabled = false;
    debugger
  }
  function onAddHandler(e) {

    e.preventDefault();

    snowmanNameValue = document.getElementById('snowman-name').value;
    heightValue = document.getElementById('snowman-height').value;
    locationValue = document.getElementById('location').value;
    creatorValue = document.getElementById('creator-name').value;
    specialAttributeValue = document.getElementById('special-attribute').value;

    if (snowmanNameValue == "" || heightValue == "" || locationValue == "" || creatorValue == "" || specialAttributeValue == "") {
      return;
    }

    liEl = create('li', null);
    article = create('article', null);
    liEl.className = 'snowman-info';
    
    article.appendChild(create('p', `Name: ${snowmanNameValue}`));
    article.appendChild(create('p', `Height: ${heightValue}`));
    article.appendChild(create('p', `Location: ${locationValue}`));
    article.appendChild(create('p', `Creator: ${creatorValue}`));
    article.appendChild(create('p', `Attribute: ${specialAttributeValue}`));
    liEl.appendChild(article);
    liEl.appendChild(btnContainer);
    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);
    previewSectionRef.appendChild(liEl);
    
    snowmanName.value = '';
    height.value = '';
    locationRef.value = '';
    creator.value = '';
    specialAttribute.value = '';
    
    addBtnRef.disabled = true;
    debugger
  }

  function create(type, content) {
    let element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    return element;
  }
}