//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNomes = [];
let botaoSortearAmigo = document.getElementById('btnSortearAmigo');

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value.trim();
    
    if (nomeAmigo == ''){
        alert("Por favor, insira um nome.")
    } else {
        if (listaNomes.includes(nomeAmigo)){
            alert("Nome já adicionado!")
        } else {
            listaNomes.push(nomeAmigo);
            alert(`${nomeAmigo} adicionado!`)
            document.getElementById('amigo').value = '';

            criarListaHtml();
            verificarLista();
        }
    }
}

function criarListaHtml(){
    let listaAmigosHtml = document.getElementById('listaAmigos')
    listaAmigosHtml.innerHTML = '';

    let ul = document.createElement('ul')
    listaNomes.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li)
    });

    listaAmigosHtml.appendChild(ul);
}


verificarLista();

function sortearAmigo(){
    if (botaoSortearAmigo.classList.contains('botao-desabilitado')){
        alert("O sorteio estará disponível apenas se incluir ao menos 2 amigos.");
        return;
    }
        let numeroAleatorio = Math.floor(Math.random() * listaNomes.length);
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = '';

        let htmlUl = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = listaNomes[numeroAleatorio];
        htmlUl.appendChild(li)
        amigoSorteado.appendChild(htmlUl);
}

function verificarLista(){
    if (listaNomes.length > 1){
        botaoSortearAmigo.classList.remove('botao-desabilitado')
    } else {
        botaoSortearAmigo.classList.add('botao-desabilitado')
    }
}

