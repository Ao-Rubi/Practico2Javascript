let numeroFilas = parseInt(prompt("Numero de filas (Max 50)"));
let impresion = "";

for (let index = 1; index <= numeroFilas; index++) {

    for (let numero = 1; numero <= index; numero++) {
        impresion += numero 
    }
    
    document.write(impresion);
    impresion = "<br>"
}

