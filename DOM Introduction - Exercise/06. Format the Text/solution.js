function solve() {
  let text = document.getElementById('input').value;
  let outputRef = document.getElementById('output');
  let textRef = text.split(".").filter(sentence => sentence.length > 0);

  for (let i = 0; i < textRef.length; i += 3) {
    let paragraphArr = [];
    for (let index = 0; index < 3; index++) {
      if (textRef[i + index]) {
        paragraphArr.push(textRef[i + index]);
      }
    }
    let paragraph = paragraphArr.join(". ") + ".";
    outputRef.innerHTML += `<p>${paragraph}</p>`;
  }
}

function solve() {
  let inputStr = document.getElementById('input').value;
  let output = document.getElementById('output');

  let input = inputStr.split('.').filter((p) => p.length > 0);

  for (let i = 0; i < input.length; i += 3) {
    let arr = [];
    for (let y = 0; y < 3; y++) {
      if (input[i + y]) {
        arr.push(input[i + y]);
      }
    }
    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}

function solve() {
  let sentences = document.getElementById('input').value
    .split('.')
    .filter(sentence => sentence.length > 0);

  let counter = 1;
  let resultStr = '<p>';
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    if (counter == 3 || i == sentence.length - 1) {
      resultStr += sentence + ".</p>";
      counter = 1;
      resultStr += '<p>';
    } else {
      resultStr += sentence + ".";
      counter++;
    }
  }
  let outputRef = document.getElementById('output');
  outputRef.innerHTML = resultStr;
}