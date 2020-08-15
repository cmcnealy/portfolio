function rot13() {
    let str = document.getElementById("rot13-form").elements.namedItem("code").value.toUpperCase();
    let codes = [];

    for (let i = 0; i < str.length; i++) {
        codes.push(str.charCodeAt(i));
    }

    let newCodes = codes.map(code => {
        let temp;
        if (code >= 65 && code <= 77) {
            temp = code + 13;
        } else if (code >= 78 && code <= 90) {
            temp = code - 13;
        } else {
            temp = code;
        }
        return String.fromCharCode(temp);
    })

    let targetdiv = document.getElementById("rot13-result");
    targetdiv.innerHTML = newCodes.join("");
}

export { rot13 }