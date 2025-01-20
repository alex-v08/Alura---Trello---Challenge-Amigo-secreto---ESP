// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listFriends = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nameInput = document.getElementById("amigo");
    const name = nameInput.value.trim();

    // Validar que el input no esté vacío
    if (name === "") {
        alert("Por favor ingrese un nombre");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (listFriends.includes(name)) {
        alert("Este nombre ya está en la lista");
        return;
    }

    // Agregar el nombre al array
    listFriends.push(name);

    // Limpiar el campo de entrada
    nameInput.value = "";
    nameInput.focus();

    // Actualizar la lista mostrada
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i < listFriends.length; i++) {
        const li = document.createElement("li");
        li.className = "name-item";

        // Crear contenedor para el nombre y el botón
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "space-between";
        container.style.alignItems = "center";
        container.style.width = "100%";
        container.style.maxWidth = "600px";
        container.style.padding = "20px";
        container.style.marginBottom = "10px";
        container.style.backgroundColor = "var(--color-white)";
        container.style.borderRadius = "40px";
        container.style.border = "2px solid #000";

        // Crear span para el nombre
        const nameSpan = document.createElement("span");
        nameSpan.textContent = listFriends[i];
        nameSpan.style.marginLeft = "30px";

        // Crear botón de eliminar
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "×";
        deleteButton.className = "button-delete";
        deleteButton.style.padding = "5px 15px";
        deleteButton.style.backgroundColor = "var(--color-button)";
        deleteButton.style.color = "var(--color-white)";
        deleteButton.style.marginRight = "20px";
        deleteButton.onclick = () => eliminarAmigo(i);

        container.appendChild(nameSpan);
        container.appendChild(deleteButton);
        li.appendChild(container);
        lista.appendChild(li);
    }
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listFriends.splice(index, 1);
    actualizarListaAmigos();
}

// Función para mezclar el array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para sortear amigos secretos
function sortearAmigo() {
    // Verificar que haya suficientes participantes
    if (listFriends.length < 2) {
        alert("Se necesitan al menos 2 participantes para realizar el sorteo");
        return;
    }

    // Crear una copia del array de amigos y mezclarla
    const shuffled = [...listFriends];
    shuffleArray(shuffled);

    // Crear las parejas de amigos secretos
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for(let i = 0; i < listFriends.length; i++) {
        const secretFriend = shuffled[(i + 1) % shuffled.length];
        const li = document.createElement("li");
        li.textContent = `${listFriends[i]} → ${secretFriend}`;
        resultado.appendChild(li);
    }
}

// Agregar evento de tecla Enter en el input
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});