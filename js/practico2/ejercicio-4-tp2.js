do {
    let numero = parseInt(prompt("Introduzca un numero"));

    if (isNaN(numero)) {
        alert("No pusiste un numero")
    }else {
        let numeroGuardado = 0;
        let total = numeroGuardado + numero
        document.write(total)
        numeroGuardado == numero
    }
} while (confirm("Desea continuar?"));