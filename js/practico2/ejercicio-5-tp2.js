// se pide un numero
let numero = parseInt(prompt("Escribe un numero"))


do {

    if (numero > 23) {
        // se confirma el resto del numero
        let division = numero % 23;
    
        // Casos segun el resto
        switch (division, numero) {
            case 1:
                T
                break;
            case 2:
                R
                break;
            case 3:
                W
                break;
            case 4:
                A
                break;
            case 5:
                G
                break;
            case 6:
                M
                break;
            case 7:
                Y
                break;
            case 8:
                F
                break;
            case 9:
                P
                break;
            case 10:
                D
                break;
            case 11:
                X
                break;
            case 12:
                B
                break;
            case 13:
                N
                break;
            case 14:
                J
                break;
            case 15:
                Z
                break;
            case 16:
                S
                break;
            case 17:
                Q
                break;
            case 18:
                V
                break;
            case 19:
                H
                break;
            case 20:
                L
                break;
            case 21:
                C
                break;
            case 22:
                K
                break;
            case 23:
                E
                break;
        }
    }
    
} while (!(numero === NaN));
