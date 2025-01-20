// Array para almacenar los nombres de los amigos
let listFriends = [];

// Función para agregar un amigo a la lista
function addFriend(name) {


    // Validar que el input no esté vacío

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
   

// Función para actualizar la lista visual de amigos

        
        // Crear contenedor para el nombre y el botón

        
        // Crear span para el nombre
    
        
        // Crear botón de eliminar

        


// Función para eliminar un amigo de la lista


// Función para mezclar el array (algoritmo Fisher-Yates)


// Función para sortear amigos secretos

    // Verificar que haya suficientes participantes

    // Crear una copia del array de amigos y mezclarla

    
    // Crear las parejas de amigos secretos


// Agregar evento de tecla Enter en el input
