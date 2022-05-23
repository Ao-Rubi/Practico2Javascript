let nota = parseInt(prompt("Escribe la nota que sacaste (En Numero)"));

if (nota<11) {

    switch (nota) {
        case 0,1,2:
            alert("Muy deficiente")
            break;
        case 3,4:
            alert("Insuficiente")
            break;
        case 5,6:
            alert("Suficiente")
            break;
        case 7:
            alert("Bien")
            break;
        case 8,9:
            alert("Notable")
            break;
        case 10:
            alert("Sobresaliente")
            break;
        default:
            break;
    }

} else if(nota>=11){
    alert("número erróneo")
}else{
    alert("Introduce un número válido")
}
