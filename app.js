// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto
    let inputAmigo = document.getElementById('amigo'); //añade el nombre
    let nombreAmigo = inputAmigo.value.trim(); //evita que queden espacios en blanco

    // Validar que el nombre no esté vacío y no contenga números
    if (nombreAmigo !== '' && !contieneNumeros(nombreAmigo)) {
        // Agregar el nombre al array
        amigos.push(nombreAmigo);
        // Limpiar el campo de texto
        inputAmigo.value = '';
        // Actualizar la lista de amigos en la página
        actualizarListaAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido (sin números).');
    }
}

// Función para verificar si una cadena contiene números
function contieneNumeros(texto) {
    // Expresión regular para buscar números
    return /\d/.test(texto);
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    // Obtener la lista donde se mostrarán los nombres
    let listaAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista antes de actualizar
    listaAmigos.innerHTML = '';

    // Recorrer el array de amigos y agregarlos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        // Crear un elemento <li> para cada amigo
        let li = document.createElement('li');
        li.textContent = `${i + 1}. ${amigo}`;
        // Agregar el <li> a la lista
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un único amigo
function sortearAmigo() {
    // Verificar que haya al menos 1 amigo en la lista
    if (amigos.length === 0) {
        alert('Debes agregar al menos un amigo para realizar el sorteo.');
        return;
    }

    // Obtener un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre del amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!</li>`;
}
