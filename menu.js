//seleciona botão e cabeçalho 
var botao= document.querySelector(".cabecalho__botao");
var cabecalho=document.querySelector("header");
console.log(cabecalho.classList)

//adiciona escutador de evento
botao.addEventListener("click", ()=>{
    //detecta se elemento já contém classe cabecalho-ativo
    let temCabecalhoAtivo=cabecalho.classList.contains("cabecalho--ativo");
    //se não tem ele adiciona, se tem ele remove
    if(!temCabecalhoAtivo){
        cabecalho.classList.add("cabecalho--ativo");
    }else{
        cabecalho.classList.remove("cabecalho--ativo");
    }
    console.log(cabecalho.classList)
})
