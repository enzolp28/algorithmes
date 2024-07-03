function reverse(str) {
    if (typeof str !== "string") {
        return "Données entrées incorrectes";
    }
    return str
        .split("")
        .reverse()
        .join("");
}

console.log(reverse("hello"));
console.log(reverse(123));
console.log(reverse("lorem ipsum dolor sit amet"));
console.log(reverse("abc"));
console.log(reverse("a"));
console.log(reverse(""));