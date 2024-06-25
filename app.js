// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do Numero Secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

function exibirMensagemInicial(){
    exibirTextoNaTela("h1","Jogo do Numero Secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}

exibirMensagemInicial();

let listaDeNumerosSorteados = [];
let numeroMaximos = 10;
let numeroSecreto = gerarNumeroAleatorio();
// gerarNumeroAleatorio();

let tentativas = 1;



function verificarChute() {

    let chute = document.querySelector("input").value;
    let mensagem  = `Parabens, voce descobriu o numero secreto(${chute}) com ${tentativas}`;
    let palavraTentativas =  tentativas > 1 ? "tentativas" : "tentativa";
    tentativas++;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1","acertou");
        exibirTextoNaTela("p",`${mensagem} ${palavraTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
       
        
    } 
    else 
        if (chute > numeroSecreto){
         exibirTextoNaTela("h1","errou ):");
         exibirTextoNaTela("p", ` o numero secreto é menor que ${chute}`) ;
    }

           else 
          {
             exibirTextoNaTela("h1","errou ):");
             exibirTextoNaTela("p", `o numero secreto é maior que ${chute}`);
          }
    limparCampo();
}


  function exibirTextoNaTela(tag, texto){

  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  }


 
function gerarNumeroAleatorio(){
      let numeroEscolhido = parseInt(Math.random() * numeroMaximos + 1);
      let quantidadesDeElementosNaLista = listaDeNumerosSorteados.length;

      if (quantidadesDeElementosNaLista == numeroMaximos){
          listaDeNumerosSorteados = [];
      }

      if (listaDeNumerosSorteados.includes(numeroEscolhido)){
       return gerarNumeroAleatorio();
      } 
       else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
      }
    }

    function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
    }
 
function reniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// gerar numeros aleatorio com math.random(). Numeros gerados serão todos em
// html usa tags, famoso
// function(função) abre parents obs, deixar  oq a função vai ser feita bem claro
// document.queryselector se usa para encontrar o arquivo em que você quer manipular pelo js logo apos se usar a tag do arquivo selecionado
// exemplo; titulo = document.querySelector("tag");
// innerHTML se usa para mexer no html quando o arquivo ja está selecionado
// para transformar uma letra em um numero usa os parseint ou parsefloat(para racionais) antes do prompt exemplo
//  parseInt(prompt(
