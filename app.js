//Variable para almacenar los nombres: array vacío
let amigos = [];

//Función para agregar un amigo

function agregarAmigo() {
  let amigoAgregado = document.getElementById("amigo");
  let nombre = amigoAgregado.value.trim();

  if (amigoAgregado){
    amigos.push(nombre)
  }


}