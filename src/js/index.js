

// - Objetivo - quando clicarmos na aba, temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior. 

// - Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.

// - Passo 2 - dar um jeito de identificar o clique no elemento da aba.

// - Passo 3 - quando o usuário clicar, desmarcar a aba selecionada. 

// - Passo 4 - marcar a aba clicada como selecionada. 

// - Passo 5 - esconder o conteúdo anterior. 

// - Passo 6 - mostrar o conteúdo da aba selecionada. 




// - Passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML.
// console.log(document.querySelectorAll(".aba"));
const abas = document.querySelectorAll(".aba");
// console.log(abas);

// - Passo 2 - dar um jeito de identificar o clique no elemento da aba.
abas.forEach(aba => {

    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionada")) {
            return
        }

        // console.log("Clicou na aba", aba);


        selecionarAba(aba)
        mostrarInformacao(aba)

       






    })

})

function selecionarAba(aba) {
    // - Passo 3 - quando o usuário clicar, desmarcar a aba selecionada. 
    const abaSelecionada = document.querySelector(".aba.selecionada")

    // console.log(abaSelecionada);
    abaSelecionada.classList.remove("selecionada");

    // - Passo 4 - marcar a aba clicada como selecionada. 
    aba.classList.add("selecionada");
}

function mostrarInformacao(aba){
     // - Passo 5 - esconder o conteúdo anterior.
     const informacaoSelecionada = document.querySelector(".informacao.selecionada");
     // console.log(informacaoSelecionada);
     informacaoSelecionada.classList.remove("selecionada");

     // - Passo 6 - mostrar o conteúdo da aba selecionada. 

     // console.log(aba.id)
     const idDoElementoDaInformacaoDaAba = `informacao-${aba.id}`;
     // console.log(idDoElementoDaInformacaoDaAba)

     const informacaoASerMostrada = document.getElementById(idDoElementoDaInformacaoDaAba)
     informacaoASerMostrada.classList.add("selecionada");
}