function mostrar(){
    var cpf = document.getElementById('cpf').
    document.getElementById("negativado").innerHTML = cpf;
   
    
}

// Função que mostra o valor do input num alert
function mostrarValor() {
    document.getElementById("negativado").innerHTML = document.getElementById("cpf").value;
     document.getElementById('tabe').style.display = "block";
    document.getElementById("tabe").className = "jumbotron";
    document.getElementById('tabela').style.display = 'table';
}

// Evento que é executado toda vez que uma tecla for pressionada no input
document.getElementById("cpf").onkeypress = function(e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        mostrarValor();
        e.preventDefault();
    }
}

// Evento que é executado ao clicar no botão de enviar
document.getElementById("enviar").onclick = function(e) {
    mostrarValor();
    e.preventDefault();
}