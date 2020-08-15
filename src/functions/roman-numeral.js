function convertToRoman() {
    let num = document.getElementById("roman-numeral-form").elements.namedItem("numeral").value;
    let targetdiv = document.getElementById("roman-numeral-result");
    let legit = true;
    if (num >= 4000) {
        targetdiv.innerHTML = "That number is too big!";
        legit = false;
    }
    let str = num.toString();
    let array = str.split("");

    let numerals = [];
    array.forEach(decimal => {
        numerals.unshift(decimal)
    });

    let romanNumeral = [];
    if (numerals[3]) {
        switch(numerals[3]) {
            case '1':
                romanNumeral.push("M");
                break;
            case '2':
                romanNumeral.push("MM");
                break;
            case '3':
                romanNumeral.push("MMM");
                break;
            default:
                break;
        }
    }

    if (numerals[2]) {
        switch(numerals[2]) {
            case '1':
                romanNumeral.push("C");
                break;
            case '2':
                romanNumeral.push("CC");
                break;
            case '3':
                romanNumeral.push("CCC");
                break;
            case '4':
                romanNumeral.push("CD");
                break;
            case '5':
                romanNumeral.push("D");
                break;
            case '6':
                romanNumeral.push("DC");
                break;
            case '7':
                romanNumeral.push("DCC");
                break;
            case '8':
                romanNumeral.push("DCCC");
                break;
            case '9':
                romanNumeral.push("CM");
                break;
            default:
                break;
        }
    }

    if (numerals[1]) {
        switch(numerals[1]) {
            case '1':
                romanNumeral.push("X");
                break;
            case '2':
                romanNumeral.push("XX");
                break;
            case '3':
                romanNumeral.push("XXX");
                break;
            case '4':
                romanNumeral.push("XL");
                break;
            case '5':
                romanNumeral.push("L");
                break;
            case '6':
                romanNumeral.push("LX");
                break;
            case '7':
                romanNumeral.push("LXX");
                break;
            case '8':
                romanNumeral.push("LXXX");
                break;
            case '9':
                romanNumeral.push("XC");
                break;
            default:
                break;
        }
    }

    if (numerals[0]) {
        switch(numerals[0]) {
            case '1':
                romanNumeral.push("I");
                break;
            case '2':
                romanNumeral.push("II");
                break;
            case '3':
                romanNumeral.push("III");
                break;
            case '4':
                romanNumeral.push("IV");
                break;
            case '5':
                romanNumeral.push("V");
                break;
            case '6':
                romanNumeral.push("VI");
                break;
            case '7':
                romanNumeral.push("VII");
                break;
            case '8':
                romanNumeral.push("VIII");
                break;
            case '9':
                romanNumeral.push("IX");
                break;
            default:
                break;
        }
    }

    if (legit) {
        targetdiv.innerHTML = romanNumeral.join("");
    }
}

export { convertToRoman }