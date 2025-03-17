// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo !== "") {
        amigos.push (nombreAmigo);
        crearLista(nombreAmigo);
        amigo.value = "";

    } else {
        alert ('Por favor inserte un nombre.');  
    }

}

function crearLista(nombreAmigo) {
    
    let ul_lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = nombreAmigo;
    ul_lista.appendChild (li);

}


    



