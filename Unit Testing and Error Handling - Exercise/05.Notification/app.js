function notify(message) {
  let divEl = document.getElementById('notification');
  divEl.style.display = 'block';
  divEl.textContent = message;
  divEl.addEventListener('click', clickHandler);

  function clickHandler(e) {
    e.target.style.display = 'none';
  }
}