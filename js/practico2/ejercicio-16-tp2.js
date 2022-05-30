let frase = prompt("Escriba lo que quiera");

function reversa(fraseReversible) {
    return fraseReversible.split("").reverse().join("");
}

let fraseRevertida = reversa(frase);
document.write(fraseRevertida);