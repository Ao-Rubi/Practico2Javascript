// se pide un numero
let numero = parseInt(prompt("Escribe un numero"))

// se confirma el resto del numero
let division = numero % 23;
do {

    if (numero > 23) {
        
        // Casos segun el resto
        switch (division, numero) {
            case 1:
                document.write("T")
                break;
            case 2:
                document.write("R")
                break;
            case 3:
                document.write("W")
                break;
            case 4:
                document.write("A")
                break;
            case 5:
                document.write("G")
                break;
            case 6:
                document.write("M")
                break;
            case 7:
                document.write("Y")
                break;
            case 8:
                document.write("F")
                break;
            case 9:
                document.write("P")
                break;
            case 10:
                document.write("D")
                break;
            case 11:
                document.write("X")
                break;
            case 12:
                document.write("B")
                break;
            case 13:
                document.write("N")
                break;
            case 14:
                document.write("J")
                break;
            case 15:
                document.write("Z")
                break;
            case 16:
                document.write("S")
                break;
            case 17:
                document.write("Q")
                break;
            case 18:
                document.write("V")
                break;
            case 19:
                document.write("H")
                break;
            case 20:
                document.write("L")
                break;
            case 21:
                document.write("C")
                break;
            case 22:
                document.write("K")
                break;
            case 23:
                document.write("E")
                break;
        }
    } else {
        alert("No pusiste un numero")
    }

} while (!(numero === NaN));
