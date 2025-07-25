const BotaoRemover = () => {
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("remover");
  botaoRemover.innerText = "❌";
  return botaoRemover;
};
export default BotaoRemover;
