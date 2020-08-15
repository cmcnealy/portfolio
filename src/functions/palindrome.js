function palindrome() {
    let str = document.getElementById("palindrome-form").elements.namedItem("palindrome").value;
    let lowerStr = str.toLowerCase();
    let result = "";

    let arr = lowerStr.split("");
    let letters = arr.filter(character => {
        let regex = /[^\W|_]/;
        return regex.test(character);
    })

    if (letters.length % 2 !== 0) {
        let index = Math.floor(letters.length/2);
        letters.splice(index, 1)
    }

    for (let i = 0; i < letters.length/2; i++) {
        if (letters[0+i] !== letters[letters.length-1-i]) {
            console.log("mismatch");
            result = "That is not a palindrome."
        }
    }
    if (result === "") {
        result = "That is a palindrome!"
    }
    let targetdiv = document.getElementById("palindrome-result");
    targetdiv.innerHTML = result;
}

export {palindrome}