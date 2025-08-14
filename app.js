//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNomes = [];

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    
    if (nomeAmigo == ''){
        alert("Preencha com um nome!")
    } else {
        listaNomes.push(nomeAmigo);
        alert(`${nomeAmigo} adicionado!`)
        
        document.getElementById('amigo').value = '';
    }
}



