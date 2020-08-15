function translatePigLatin() {
    let str = document.getElementById("pig-latin-form").elements.namedItem("pig-word").value.toLowerCase();

    let vowelRegex = /^[aeiou]+/;
    let consonantRegex = /^[^aeiou]+/;

    let pigStr;

    if (vowelRegex.test(str)) {
        pigStr = str.concat("way");
        pigStr = str.concat("ay");
    } else {
        let consonant = str.match(consonantRegex);
        let middle = str.substr(consonant[0].length);
        pigStr = middle.concat(consonant[0], "ay");
        console.log(pigStr);
    }
    let targetdiv = document.getElementById("pig-latin-result");
    targetdiv.innerHTML = pigStr[0].toUpperCase() + pigStr.slice(1);
}

export { translatePigLatin }