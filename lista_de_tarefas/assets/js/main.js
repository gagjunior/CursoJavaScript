const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const listTarefas = document.querySelector('.tarefas');

function criaElemento(elemento) {
    const el = document.createElement(elemento);
    return el;
}

function salvarTarefas(){
    const liTarefas = listTarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (const tarefa of liTarefas) {
        let textoTarefa = tarefa.innerText;
        textoTarefa = textoTarefa.replace('Apagar', '').trim();
        listaDeTarefas.push(textoTarefa);
    }
    
    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function criarTarefa(textoTarefa) {
    const li = criaElemento('li');
    const btnApagar = criaElemento('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.innerText = textoTarefa + ' ';
    li.appendChild(btnApagar);
    listTarefas.appendChild(li);
    salvarTarefas();

}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

inputTarefa.addEventListener('keypress', event => {
    if (event.code === 'Enter') {
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
        limpaInput();
    }
});

btnTarefa.addEventListener('click', e => {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
    limpaInput();
});

document.addEventListener('click', e => {
    const elemento = e.target;

    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

function obterTarefasSalvas(){
    const tarefasSalvas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefasSalvas);

    for (const tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}

obterTarefasSalvas();