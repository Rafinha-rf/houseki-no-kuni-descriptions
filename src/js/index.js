const listaSelecaoGemas = document.querySelectorAll(".gema");

listaSelecaoGemas.forEach(gema => {
    gema.addEventListener('click', () => {
        esconderCartaoGema();

        const idGemaSelecionado = mostrarCartaoGemaSelecionado(gema);

        desativarGemaNaListagem();

        ativarPodevNalistagem(idGemaSelecionado);

    })
})

function ativarPodevNalistagem(idGemaSelecionado) {
    const gemaSelecionaNaListagem = document.getElementById(idGemaSelecionado);

    gemaSelecionaNaListagem.classList.add('ativo');
}

function desativarGemaNaListagem() {
    const gemaAtivoNaListagem = document.querySelector(".ativo");
    gemaAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoGemaSelecionado(gema) {
    const idGemaSelecionado = gema.attributes.id.value;

    const idDoCartaoGemaParaAbrir = "cartao-" + idGemaSelecionado;

    const cartaoGemaParaAbrir = document.getElementById(idDoCartaoGemaParaAbrir);
    cartaoGemaParaAbrir.classList.add("aberto");
    return idGemaSelecionado;
}

function esconderCartaoGema() {
    const cartaoGemaAberto = document.querySelector(".aberto");
    cartaoGemaAberto.classList.remove('aberto');
}
