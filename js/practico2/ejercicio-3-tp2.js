do {
    let texto = prompt("Escribe algo que quieras")

    if (texto == null || texto == NaN) {
        
    } else {
        document.write(texto + "<br>")
    }

    
} while (confirm("Quieres continuar escribiendo?"));