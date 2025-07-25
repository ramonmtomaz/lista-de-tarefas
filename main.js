<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Objetivos</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="cabecalho">
      <h1 class="cabecalho">Lista de Tarefas</h1>
    </div>

    <div class="paginatoda">
      <div class="navbar">
        <ul>
          <li class="listaNavbar">
            <a href="#" class="abaPendente">Tarefas Pendentes</a>
            <a href="#" class="abaConcluido">Tarefas Concluidas</a>
          </li>
        </ul>
      </div>

      <div class="conteudo">
        <div class="listaTarefas">
          <div class="tarefasPendentes" style="display: block">
            <div class="input-add-tarefa">
              <h2>Informe a Tarefa</h2>
              <input
                type="text"
                class=""
                placeholder="Informe a Tafera e o prazo para conclusão!"
                data-input
              />
              <input type="date" class="campoData" data-data />
              <button class="botao-add-tarefa" data-button-add>
                Adicionar
              </button>
            </div>

            <div class="lista-pendente">
              <h2>Tarefas Pendentes</h2>
              <ul class="campoListaPendente" data-lista-pendente></ul>
            </div>
          </div>
          <div class="lista-concluido" style="display: none">
            <h2>Tarefas Concluidas</h2>

            <ul class="campoListaConcluido" data-lista-concluido></ul>
          </div>
        </div>
      </div>
    </div>

    <script type="module" src="main.js"></script>
  </body>
</html>
