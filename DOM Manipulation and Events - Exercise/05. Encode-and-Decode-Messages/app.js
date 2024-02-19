function encodeAndDecodeMessages() {
    let buttonsRef = Array.from(document.querySelectorAll('button'));
    let textAreaRef = Array.from(document.querySelectorAll('textArea'));
    let encodingButton = buttonsRef[0].addEventListener('click', encodeMessage);
    let decodingButton = buttonsRef[1].addEventListener('click', decodeMessage);

    function encodeMessage(e) {
        let input = textAreaRef[0].value;
        input = input
            .split('')
            .map(char => {
                let code = char.charCodeAt() + 1;
                return String.fromCharCode(code);
            })
            .join('');
            textAreaRef[1].value = input;
            
        textAreaRef[0].value = "";
    }
    
    function decodeMessage(e) {
        let encodedOutput = textAreaRef[1].value;
        encodedOutput = encodedOutput
        .split('')
        .map(char => {
            let code = char.charCodeAt() - 1;
            return String.fromCharCode(code);
        })
        .join('');
        textAreaRef[1].value = encodedOutput;
    }
}