function convert() {
    let str = document.getElementById("roman-numeral-form").elements.namedItem("numeral").value;
    let targetdiv = document.getElementById("roman-numeral-result");
    let validatorregex = /^M{0,9}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    let num = parseInt(str);
    if (num) {
        if (num >= 10000) {
            targetdiv.innerHTML = "That number is too big!";
        } else {
            targetdiv.innerHTML = convertToRoman(num);
        }
    } else {
        let newstr = str.toUpperCase();
        if (/[0-9]*/.test(str)) {
            newstr = newstr.replace(/[0-9]/g, '');
        }
        if (validatorregex.test(newstr)) {
            targetdiv.innerHTML = convertFromRoman(newstr);
        } else {
            targetdiv.innerHTML = "That is an invalid roman numeral!";
        }
    }
}

function convertFromRoman(str) {
    let num = 0;
    let thousands, fivehundreds, hundreds, fifties, tens, fives, ones;

    // handle thousands (M)
    if (/M+/.test(str)) {
        if (/CM/.test(str)) {
            num += 900;
            thousands = str.replace(/CM/, "");
        } else {
            thousands = str;
        }
        if (/^M/.test(thousands)) {
            let ems = thousands.match(/^M+/);
            num += (1000 * ems[0].length);
            fivehundreds = thousands.replace(ems[0], "");
        } else {
            fivehundreds = thousands;
        }
    } else {
        fivehundreds = str;
    }

    // handle five hundreds (D)
    if (/^C*D+C*/.test(fivehundreds)) {
        let dees = fivehundreds.match(/^C*D+C*/);
        switch(dees[0]) {
            case "DCCC":
                num += 800;
                break;
            case 'DCC':
                num += 700;
                break;
            case 'DC':
                num += 600;
                break;
            case 'D':
                num += 500;
                break;
            case "CD":
                num += 400;
                break;
            default:
                break;
        }
        hundreds = fivehundreds.replace(dees[0], "");
    } else {
        hundreds = fivehundreds;
    }

    // handle hundreds (C)
    if (/C+/.test(hundreds)) {
        if (/XC/.test(str)) {
            num += 90;
            hundreds = hundreds.replace(/XC/, "");
        }
        if (/^C/.test(hundreds)) {
            let cees = hundreds.match(/^C+/);
            num += (100 * cees[0].length);
            fifties = hundreds.replace(cees[0], "");
        } else {
            fifties = hundreds;
        }
    } else {
        fifties = hundreds;
    }

    // handle fifties (L)
    if (/^X*L+X*/.test(fifties)) {
        let ells = fifties.match(/^X*L+X*/);
        console.log(ells);
        switch(ells[0]) {
            case "LXXX":
                num += 80;
                break;
            case 'LXX':
                num += 70;
                break;
            case 'LX':
                num += 60;
                break;
            case 'L':
                num += 50;
                break;
            case "XL":
                num += 40;
                break;
            default:
                break;
        }
        tens = fifties.replace(ells[0], "");
    } else {
        tens = fifties;
    }

    // handle tens (X)
    if (/X+/.test(tens)) {
        if (/IX/.test(tens)) {
            num += 9;
            tens = tens.replace(/IX/, "");
        }
        if (/^X/.test(tens)) {
            let exes = tens.match(/^X+/);
            num += (10 * exes[0].length);
            fives = tens.replace(exes[0], "");
        } else {
            fives = tens;
        }
    } else {
        fives = tens;
    }

    // handle fives (V)
    if (/^I*V+I*/.test(fives)) {
        let vees = fives.match(/^I*V+I*/);
        switch(vees[0]) {
            case "VIII":
                num += 8;
                break;
            case 'VII':
                num += 7;
                break;
            case 'VI':
                num += 6;
                break;
            case 'V':
                num += 5;
                break;
            case "IV":
                num += 4;
                break;
            default:
                break;
        }
        ones = fives.replace(vees[0], "");
    } else {
        ones = fives;
    }

    // handle ones (I)
    if (/^I/.test(ones)) {
        let eyes = ones.match(/^I+/);
        num += eyes[0].length;
    }

    // Make sure all regexes are matched and also removed
    // If anything is left, return an error instead
    // That is not a valid roman numeral

    return num.toString();
}

function convertToRoman(num) {
    let str = num.toString();
    let array = str.split("");

    let numerals = [];
    array.forEach(decimal => {
        numerals.unshift(decimal);
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
            case '4':
                romanNumeral.push("MMMM");
                break;
            case '5':
                romanNumeral.push("MMMMM");
                break;
            case '6':
                romanNumeral.push("MMMMMM");
                break;
            case '7':
                romanNumeral.push("MMMMMMM");
                break;
            case '8':
                romanNumeral.push("MMMMMMMM");
                break;
            case '9':
                romanNumeral.push("MMMMMMMMM");
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

    return romanNumeral.join("");
}

export { convert, convertFromRoman, convertToRoman }