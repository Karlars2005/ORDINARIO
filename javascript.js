// Función para cambiar el color de fondo y las letras con las teclas 1-5
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "1":
            document.body.style.backgroundColor = "blue";
            document.body.style.color = "white";
            break;
        case "2":
            document.body.style.backgroundColor = "green";
            document.body.style.color = "black";
            break;
        case "3":
            document.body.style.backgroundColor = "red";
            document.body.style.color = "yellow";
            break;
        case "4":
            document.body.style.backgroundColor = "yellow";
            document.body.style.color = "blue";
            break;
        case "5":
            document.body.style.backgroundColor = "orange";
            document.body.style.color = "white";
            break;
    }
});

// Función para mostrar la tecla presionada en la consola
document.addEventListener("keydown", function(event) {
    console.log("Tecla presionada: " + event.key);
});

// Funciones para mostrar alertas
function mostrarAlerta1() {
    alert("Hola mundo");
}

function mostrarAlerta2() {
    alert("Nos vemos");
}
