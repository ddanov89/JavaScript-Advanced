window.addEventListener('load', solution);

function solution() {


  let employeeRef = document.getElementById('employee');
  let categoryRef = document.getElementById('category');
  let urgencyRef = document.getElementById('urgency');
  let assignedTeamRef = document.getElementById('team');
  let descriptionRef = document.getElementById('description');

  let employee;
  let category;
  let urgency;
  let assignedTeam;
  let description;

  let addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', onAddHandler);

  let editBtn = createElement('button', 'Edit');
  editBtn.className = 'edit-btn';

  let continueBtn = createElement('button', 'Continue');
  continueBtn.className = 'continue-btn';
  let resolvedBtn = createElement('button', 'Resolved');
  resolvedBtn.addEventListener('click', onResolveHandler);
  resolvedBtn.className = 'resolve-btn';
  const clearBtn = createElement('button', 'Clear');
  clearBtn.className = 'clear-btn';
  clearBtn.addEventListener('click', onClearHandler);

  let liEl = createElement('li', null);

  let previewRef = document.querySelector('.preview-list');
  let pendingRef = document.querySelector('.pending-list');
  let resolveRef = document.querySelector('.resolved-list');

  function onAddHandler(e) {

    e.preventDefault();

    if (
      employeeRef.value == '' ||
      categoryRef.value == '' ||
      urgencyRef.value == '' ||
      assignedTeamRef.value == "" ||
      descriptionRef.value == ""
    ) {
      return;
    }

    employee = employeeRef.value;
    category = categoryRef.value;
    urgency = urgencyRef.value;
    assignedTeam = assignedTeamRef.value;
    description = descriptionRef.value;

    liEl = createElement('li', null);
    liEl.className = 'problem-content';
    let articleElement = createElement('article', null);
    articleElement.appendChild(createElement('p', `From: ${employeeRef.value}`));
    articleElement.appendChild(createElement('p', `Category: ${categoryRef.value}`));
    articleElement.appendChild(createElement('p', `Urgency: ${urgencyRef.value}`));
    articleElement.appendChild(createElement('p', `Assigned to: ${assignedTeamRef.value}`));
    articleElement.appendChild(createElement('p', `Description: ${descriptionRef.value}`));

    liEl.appendChild(articleElement);
    previewRef.appendChild(liEl);
    editBtn.addEventListener('click', onEditHandler);
    continueBtn.addEventListener('click', onContinueHandler);

    addBtn.parentElement.reset();
    addBtn.disabled = true;
    liEl.appendChild(editBtn);
    liEl.appendChild(continueBtn);

  }

  function onEditHandler() {

    employeeRef.value = employee;
    categoryRef.value = category;
    urgencyRef.value = urgency;
    assignedTeamRef.value = assignedTeam;
    descriptionRef.value = description;

    liEl.remove();

    addBtn.disabled = false;
  }

  function onContinueHandler() {

    liEl.remove();
    pendingRef.appendChild(liEl);
    liEl.removeChild(editBtn);
    liEl.removeChild(continueBtn);
    liEl.appendChild(resolvedBtn);
  }

  function onResolveHandler() {
    liEl.remove();
    liEl.removeChild(resolvedBtn);
    resolveRef.appendChild(liEl);
    liEl.appendChild(clearBtn);
  }

  function onClearHandler() {
    liEl.remove();
    addBtn.disabled = false;
  }

  function createElement(type, content) {
    const element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    return element;
  }
}