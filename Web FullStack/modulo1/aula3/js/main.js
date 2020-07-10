var z;
function abrir(){
   z = window.open("https://www.google.com.br");
    w.open();
}

function fechar(){
    var w = window.open("https://www.google.com.br");
    w.open();
    sleep(2000).then(()=>{w.close()});
    sleep(1000).then(()=>{z.close()});
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function trocarCor(cor){
    let div = document.getElementById("dvDisplay");
    if( div!=null ){
        div.style.backgroundColor = cor;
    }else{
        console.log("não encontrei a div");
    }
}

function trocarCores(cor){
    var textcor = document.getElementById("tema").href;
    let div = document.getElementById("dvDisplay");
    if(cor=="#ffffff" && "http://127.0.0.1:5500/modulo1/aula3/css/styleBlack.css" == textcor){
        if( div!=null ){
            div.style.backgroundColor = cor;
            div.style.color = "#000000";
        }else{
            console.log("não encontrei a div");
        }
    }else if(cor=="#000000" && "http://127.0.0.1:5500/modulo1/aula3/css/styleBlack.css" == textcor){
        if( div!=null ){
            div.style.backgroundColor = cor;
            div.style.color = "#ffffff";
        }else{
            console.log("não encontrei a div");
        }
    }else if(cor=="#000000" && "http://127.0.0.1:5500/modulo1/aula2/css/styleIndex.css" == textcor){
        if( div!=null ){
            div.style.backgroundColor = cor;
            div.style.color = "#ffffff";
        }else{
            console.log("não encontrei a div");
        }  
    }else{
        if( div!=null ){
            div.style.backgroundColor = cor; 
            div.style.color = "#000000";    
        }else{
            console.log("não encontrei a div");
        }  
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

function temaBlack(){
    document.getElementById("tema").href = "css/styleBlack.css";
    document.getElementById("tema1").href = "css/styleNavBlack.css";          
}

function temaNorm(){
    document.getElementById("tema").href = "../aula2/css/styleIndex.css";
    document.getElementById("tema1").href = "../aula2/css/styleNav.css";
}

function exConteudo(){
    var atual = document.getElementById("exConte").innerHTML;
    if(atual != "Olá HTML"){
        document.getElementById("exConte").innerHTML = "Olá HTML";
    }else{
        document.getElementById("exConte").innerHTML = "Olá JavaScript";
    }
}

function atributoHtml(){
    document.getElementById("exAtri").src = "images/exemploHTML.jpg";
}

function atributoCss(){
    document.getElementById("exAtri").src = "images/exemploCSS.jpg";
}

function atributoJs(){ 
    document.getElementById("exAtri").src = "images/exemploJava.gif";
}

function aparecer(){
    document.getElementById("exEstilo").style.display = "block";
}

function sumir(){
    document.getElementById("exEstilo").style.display = "none";
}

function exNavegador(){
    document.getElementById("navegador").innerHTML = navigator.language;
}

function exLocaliza(){
    document.getElementById("pagina").innerHTML = window.location.href;
}

function extela(){
    document.getElementById("tela").innerHTML = screen.width;
}

function exhitorico(){
    document.getElementById("histo").innerHTML = window.history;
}

function geo(){
    document.getElementById("histo").innerHTML = navigator.geolocation;
}