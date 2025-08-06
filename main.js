import BotaoConclui from "./botaoConcluir.js";

import BotaoRemover from "./botaoRemover.js";

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
const salvarTarefas = () =>
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

const renderizarTarefas = () => {
  const listaPendente = document.querySelector("[data-lista-pendente]");
  const listaConcluida = document.querySelector("[data-lista-concluido]");

  listaPendente.innerHTML = "";
  listaConcluida.innerHTML = "";

  tarefas.sort((a, b) => new Date(a.data) - new Date(b.data));

  tarefas.forEach((tarefa, indice) => {
    const criarTarefa = document.createElement("li");
    criarTarefa.classList.add("tarefa-item");

    criarTarefa.innerHTML =
      `<p class="item-pendente">${tarefa.texto} </p> ` +
      `<p class="data-termino">Prazo: ${formatarData(tarefa.data)}</p>`;

    if (tarefa.concluida) {
      const botaoRemover = BotaoRemover();
      botaoRemover.addEventListener("click", () => {
        removerTarefa(indice);
      });
      criarTarefa.appendChild(botaoRemover);
      listaConcluida.appendChild(criarTarefa);
    } else {
      const botaoConclui = BotaoConclui();
      botaoConclui.addEventListener("click", () => {
        concluirTarefa(indice);
      });
      criarTarefa.appendChild(botaoConclui);
      const botaoRemover = BotaoRemover();
      botaoRemover.addEventListener("click", () => {
        removerTarefa(indice);
      });
      criarTarefa.appendChild(botaoRemover);

      listaPendente.appendChild(criarTarefa);
    }
  });
};

const concluirTarefa = (indice) => {
  tarefas[indice].concluida = !tarefas[indice].concluida;
  salvarTarefas();
  renderizarTarefas();
};

const removerTarefa = (indice) => {
  tarefas.splice(indice, 1);
  salvarTarefas();
  renderizarTarefas();
};

const adicionarTarefa = (evento) => {
  evento.preventDefault();
  const campoTarefa = document.querySelector("[data-input]");
  const valorTarefa = campoTarefa.value;
  const campoData = document.querySelector("[data-data]");
  const valorData = campoData.value;

  if (valorTarefa === "" || valorData === "") {
    return;
  }

  tarefas.push({
    texto: valorTarefa,
    data: valorData,
    concluida: false,
  });

  campoTarefa.value = "";
  campoData.value = "";
  salvarTarefas();
  renderizarTarefas();
};

const formatarData = (dataString) => {
  if (!dataString) return "";
  const partes = dataString.split("-");
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

const botaoAdd = document.querySelector("[data-button-add]");
botaoAdd.addEventListener("click", adicionarTarefa);

renderizarTarefas();

const alterarAba = () => {
  const abaPendente = document.querySelector(".abaPendente");
  const abaConcluido = document.querySelector(".abaConcluido");
  const campoPendente = document.querySelector(".tarefasPendentes");
  const campoConcluido = document.querySelector(".lista-concluido");

  abaPendente.addEventListener("click", () => {
    campoPendente.style.display = "block";
    campoConcluido.style.display = "none";
  });

  abaConcluido.addEventListener("click", () => {
    campoConcluido.style.display = "block";
    campoPendente.style.display = "none";
  });
};

const abaPendente = document.querySelector(".abaPendente");

abaPendente.addEventListener("click", alterarAba);

const abaConcluido = document.querySelector(".abaConcluido");

abaConcluido.addEventListener("click", alterarAba);
