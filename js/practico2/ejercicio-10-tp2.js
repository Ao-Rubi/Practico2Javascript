let filas = parseInt(prompt("ingrese una cantidad de filas"));
let columnas = parseInt(prompt("ingrese una cantidad de columnas"));

let resultados = filas * columnas;

document.write(`<table> <tbody>`)
// Aqui dibujo las dfilas y celdas
for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
    //Dibujo las filas
    document.write("<tr>")
    
    //Dibujo las celdas
    for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
        document.write(`<td>${resultados}</td>`);
        resultados--;
    }

    document.write("</tr>")
    
}
document.write(`</table> </tbody>`)