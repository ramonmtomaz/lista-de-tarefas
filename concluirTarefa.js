const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('concluido')
    botaoConclui.innerText = '✅'
    botaoConclui.addEventListener('click', concluirTarefa)
    
    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConcluido = evento.target
    const valorTarefa = botaoConcluido.parentElement    

    const textoTarefa = valorTarefa.firstChild.textContent
    
    const listaConcluida = document.querySelector('[data-lista-concluido]')

    const criarTarefaConcluida = document.createElement('li')

    const linhaConluida = `<p>${textoTarefa}</p>`

    criarTarefaConcluida.innerHTML= linhaConluida

    listaConcluida.appendChild(criarTarefaConcluida)

    valorTarefa.remove()
}


export default BotaoConclui