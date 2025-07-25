import BotaoConclui from "./concluirtarefa.js"

import BotaoRemover from "./removerTarefa.js"

const adicionarTarefa = (evento) => {
    evento.preventDefault()
    const campoTarefa = document.querySelector('[data-input]')
    const valorTarefa = campoTarefa.value       
    const lista = document.querySelector('[data-lista-pendente]')
    const criarTarefa = document.createElement('li')
    const tarefaListada = `<p>${valorTarefa}</p>`

    criarTarefa.innerHTML = tarefaListada   
    criarTarefa.appendChild(BotaoConclui())
    criarTarefa.appendChild(BotaoRemover())
    lista.appendChild(criarTarefa)
    campoTarefa.value = ""
}

 const botaoAdd = document.querySelector('[data-button-add]')

 botaoAdd.addEventListener('click', adicionarTarefa)

 


const alterarAba = () => {   

    const abaPendente = document.querySelector('.abaPendente')

    const abaConcluido = document.querySelector('.abaConcluido')

    const campoPendente = document.querySelector('.tarefasPendentes')

    const campoConcluido = document.querySelector('.tarefasConcluidas')

    abaPendente.addEventListener('click', ()=> {        

        if (campoPendente.style.display === 'none') {
            campoPendente.style.display = "block"
            campoConcluido.style.display = 'none'
        }              
    })

    abaConcluido.addEventListener('click', () => {           

        if (campoConcluido.style.display === 'none') {
            campoConcluido.style.display = 'block'
            campoPendente.style.display = "none"
        }
    }) 
}

const abaPendente = document.querySelector('.abaPendente')

abaPendente.addEventListener('click', alterarAba)

const abaConcluido = document.querySelector('.abaConcluido')

abaConcluido.addEventListener('click', alterarAba)