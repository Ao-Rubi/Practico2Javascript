let numero1 = parseInt(prompt("Indique su edad"));

if (numero1 > 18) {
    document.write("Usted ya puede conducir")
}else if (numero1 <= 18){
    document.write("Usted no pude conducir")
}else {
    document.write("No coloco una edad valida")
}