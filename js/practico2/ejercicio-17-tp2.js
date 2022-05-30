let frase = prompt("ingresa una palabra");
frase = frase.toLocaleLowerCase();

for(let indice = 0; indice < frase.length; indice++) {
    if (frase.charAt(indice) === "a" || frase.charAt(indice) === "e" || frase.charAt(indice) === "i" || frase.charAt(indice) === "o" || frase.charAt(indice) === "u") {
    document.write(` La primera vocal del texto esta en la posicion ${indice} `)
    break;
    }
}
