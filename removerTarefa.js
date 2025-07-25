const BotaoRemover = () => {
    const botaoRemover = document.createElement('button')

    botaoRemover.classList.add('remover')

    botaoRemover.innerText = '❌'


    botaoRemover.addEventListener('click', () => {
        console.log('teste');
        
    })

    return botaoRemover
}

export default BotaoRemover