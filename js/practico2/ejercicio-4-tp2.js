do {
    let numero = parseInt(prompt("Introduzca un numero"));

    if (isNaN(numero)) {
        alert("No pusiste un numero")
    }else {
        let suma = suma + numero;
        document.write(suma + numero)
    }
} while (confirm("Desea continuar?"));