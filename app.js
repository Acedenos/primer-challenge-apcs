// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {

    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == "") {
        alert ('Por favor inserte un nombre.');

    } else if (amigos.includes(nombreAmigo)) {
        alert ("Este amigo ya ha sido agregado a la lista.");
        amigo.value = "";

    } else {
        amigos.push (nombreAmigo);
        crearLista(nombreAmigo);
        amigo.value = ""; 
    }
    return;
}

function crearLista(nombreAmigo) {
    
    let ul_lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = nombreAmigo;
    ul_lista.appendChild (li);

}

function sortearAmigo() {
    if (amigos.length === 0) {  
        alert("No hay amigos en la lista. Agrega al menos uno antes de sortear.");

    } else {
        let resultadoLista = document.getElementById('resultado');
        listaAmigos.innerHTML = "";
    
        let amigoSeleccionado = Math.floor(Math.random()* amigos.length);
        let amigoSorteado = amigos[amigoSeleccionado];
        
        resultadoLista.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;

    }
}