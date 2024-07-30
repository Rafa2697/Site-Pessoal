//passo 1 - pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  // passo 2 - dar um jeito de identificar o clique no elemento aba
  aba.addEventListener("click", function () {
    if (aba.classList.contains("selecionado")) {
      return;
    }
    // passo 3 - quando o usuario clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // passo 4 - marcar a aba clícada com selecionado
    aba.classList.add("selecionado");

    //passo 5 - esconder o conteúdo anterios

    const informacaoSelecionada = document.querySelector(
      ".informacao.selecionado"
    );
    informacaoSelecionada.classList.remove("selecionado");

    //passo 6 - mostrar o conteúdo da aba selecionada
        const idElementoInformacoes = `informacao-${aba.id}`

        const informacaoMostrada = document.getElementById(idElementoInformacoes)
        informacaoMostrada.classList.add("selecionado")

  });
});