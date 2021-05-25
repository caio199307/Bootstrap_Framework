/*
pesquisar por tag, e ela é case sensitive.
por tag= getElementByTagName()
por id = getElementById() -- mais usado
por nome = getElementsByName()
por classe = getElementsByClassName()
por seletor = querySelector()  --mais usado
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false


nome.style.width = '100%'
email.style.width = '100%'


function validaNome() {
    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txt.innerHTML = "nome inválido"
        txt.style.color = "red"
    }
    else{
        txt.innerHTML = "nome válido"
        txt.style.color = "green"
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@")==-1 || email.value.indexOf(".") ==-1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color ="red"
    }
    else{
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color="green"
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto é muito grande"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }
    else{
        txtAssunto.style.display = "none"
        assuntoOk = true


    }
}
function enviar(){
    if(emailOK == true && assuntoOk == true){
        alert("Formulário enviado com sucesso")
    }
    else{
        alert("Preenchar o formulário corretamente")
    }
}
function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

