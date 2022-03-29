function inserir(numero){
    document.getElementById("painel").innerHTML += numero ;
}
function limpar(){
    document.getElementById("painel").innerHTML = "";
}
function apagarUltima(){
    let expressao = document.getElementById("painel").innerHTML ;
    document.getElementById("painel").innerHTML = expressao.substring(0, expressao.length -1);
}
function calculo(){
    let expressao = document.getElementById("painel").innerHTML;
    if(expressao != ""){
        document.getElementById("painel").innerHTML = eval(expressao);
    }
}