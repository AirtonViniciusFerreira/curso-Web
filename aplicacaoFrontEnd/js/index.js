const url = 'http://127.0.0.1:8000/api/users';

function logar(){
    var conteudo = `
    <div class="section center indigo lighten-4">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1>Login</h1>
                        <h5>Insira seus dados para fazer o login</h5>
                    </div>
                </div>
            </div>
            <form id="form-login" >
                <div class="container">
                    <div class="row">
                        <div class="col s12 l6" >
                            <h6>Email</h6>
                            <input type="email" id="email" name="email" value="Insira seu Email">
                        </div>
                        <div class="col s12 l6" >
                            <h6>Senha</h6>
                            <input type="password" id="password" name="password">
                        </div>
                        <div class="col s12 l6" >
                            <button class="btn waves-effect waves-light"  onclick="login()" type="submit">Entrar<i class="material-icons right">send</i></button>
                        </div>
                        <div class="col s12 l6" >
                            <a href="#" onclick="cadastrar()" class="btn red waves-effect waves-light">Cadastrar</a>
                        </div>
                    </div>
                </div>
            </form> 
        `
        ;
    document.getElementById("titulo").innerText = "Início";
    document.getElementById("conteudo").innerHTML = conteudo;
}

function cadastrar(){
    var conteudo = `
    <div class="section center indigo lighten-4">
            <div class="container">
                <div class="row">
                    <div class="col s12">
                        <h1>Cadastro</h1>
                        <h5>Insira seus dados para fazer o cadastro</h5>
                    </div>
                </div>
            </div>
            <form id="form-cadasrtro" >
                <div class="container">
                    <div class="row">
                        <div class="col s12 l6" >
                            <h6>Nome</h6>
                            <input type="text" id="name" name="name" value="Insira seu Nome">
                        </div>
                        <div class="col s12 l6" >
                            <h6>Email</h6>
                            <input type="email" id="email" name="email" value="Insira seu Email">
                        </div>
                        <div class="col s12" >
                            <h6>Senha</h6>
                            <input type="password" id="password" name="password">
                        </div>
                        <div class="col s12 l6" >
                            <button class="btn waves-effect waves-light" onclick="cadastro()" type="submit">Cadastrar<i class="material-icons right">send</i></button>
                        </div>
                        <div class="col s12 l6" >
                            <a href="#!" onclick="logar()" class="btn red waves-effect waves-light">Entrar</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>`;
        document.getElementById("titulo").innerText = "Cadastro";
        document.getElementById("conteudo").innerHTML = conteudo;
}

function cadastro(){
    //leitura dos inputs
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    //criação do Json
    var object =
    {
        "name" : name,
        "email" : email,
        "password" : password
    }
    //envio para a api
    fetch(url,
        {
            method: 'post',
            headers : new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'     
            }),
            body: JSON.stringify(object) // adiciona o Json no body
        })
        //recebe a  resposta e verifica se foi efetivado
        .then((response) => {
            if(response.ok){ 
                alert("Cadastrado com sucesso");
                window.location.href = "index.html";
            }
        })
        //trata algum erro
        .catch(function(erro){
            alert("Erro ao criar o registro:" + erro);
            cadastrar();
        })
       
}

function login(){
   //leitura dos inputs
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   //criação do Json
   var object =
   {
       "email" : email,
       "password" : password
   }
   //envio para a api
    var urlLogin = 'http://127.0.0.1:8000/api/login';
    fetch(urlLogin,
        {
            method: 'post',
            headers : new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'     
            }),
            body: JSON.stringify(object) // adiciona o Json no body
        })
        //recebe a  resposta e verifica se foi efetivado
        .then((response)=> {
            if(response.ok){
                alert("Logado com sucesso");
                window.location.href = "pages/debts.html";
                return console.log(response.json);
            }
        })
        //trata algum erro
        .catch(function(erro){
            alert("Erro ao criar o registro:" + erro);
        })
        
}