function solve() {
  let textValue = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  const resultRef = document.getElementById('result');

  textValue = textValue.toLowerCase();
  let result = '';
  let textArr = textValue.split(" ");

  switch (convention) {
    case "Camel Case":
      textArr = textValue.split(' ');
      result = textArr.shift();
      textArr.forEach(word => {
        result += word[0].toUpperCase() + word.substring(1).toLowerCase();
      });
      break;
    case "Pascal Case":
      textValue.split(" ")
        .forEach(word => {
          result += word[0].toUpperCase() + word.substring(1);
        });
      break;
    default: result = "Error!"
      break;
  }
  resultRef.textContent = result;
}