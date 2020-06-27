function open(){
    window.open("https://www.google.com.br");
}

function trocarCor(cor){
    let div = document.getElementById("dvDisplay");
    if( div!=null ){
        div.style.backgroundColor = cor;
    }else{
        console.log("não encontrei a div");
    }
}

function trocarTema(cor, textColor){
    let div = document.getElementById("bdyDisplay");
    if( div!=null ){
        div.style.backgroundColor = cor;
        div.style.textDecorationColor = textColor;
    }else{
        console.log("não encontrei a div");
    }
}