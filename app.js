
// Lista para almacenar los nombres de los participantes
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Ingresa un nombre válido y que no esté repetido.");
    }
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Deben haber al menos 2 participantes para hacer el sorteo.");
        return;
    }

    let copiaAmigos = [...amigos]; 
    let resultado = {};

    for (let i = 0; i < amigos.length; i++) {
        let opciones = copiaAmigos.filter((amigo) => amigo !== amigos[i]);
        if (opciones.length === 0) { 
            alert("Error en el sorteo. Intenta de nuevo.");
            return;
        }

        let seleccionado = opciones[Math.floor(Math.random() * opciones.length)];
        resultado[amigos[i]] = seleccionado;

        copiaAmigos = copiaAmigos.filter((amigo) => amigo !== seleccionado);
    }

    mostrarResultado(resultado);
}

// Función para mostrar los resultados en la pantalla
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    for (const [amigo, secreto] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${secreto}`;
        listaResultado.appendChild(li);
    }
}
