function extractText() {
    const list = document.getElementById('items');
    let result = [];
    const items = Array.from(list.children);
    for (let item of items) {
        result.push(item.textContent);
    }
    const textArea = document.getElementById('result');
    textArea.value = result.join('\n');
}

function solve() {
    document.getElementById('result').value = [...document.getElementById('items').children].map(e => e.textContent).join('\n');
}

function extractText() {
    let itemNodes = document.querySelectorAll("ul#items li");
    let textArea = document.querySelector('#result');
    for (let node of itemNodes) {
        textArea.value += node.textContent + '\n';
    }
}