function getVowelsNumber(txt){

    if (typeof txt !== "string") {
        return "Données entrées incorrectes";
    }
    
    const vowels = ["a", "e", "i", "o", "u", "y"];
    let count = 0;

    for (let i = 0; i < txt.length; i++) {
        if (vowels.includes(txt[i].toLowerCase())) {
            count++;
        }
    }
    return count;
    
}

console.log(getVowelsNumber("hello"));
console.log(getVowelsNumber(123));
console.log(getVowelsNumber("lorem ipsum dolor sit amet"));
console.log(getVowelsNumber("zzzzzzzzz"));
console.log(getVowelsNumber("a"));
console.log(getVowelsNumber("ZZZZZ"));