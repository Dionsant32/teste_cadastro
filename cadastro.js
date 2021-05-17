var atual;
var localStorage = Window.localStorage;

function gravar(){ 
    var novo = new Object(); 
    novo.cpf=document.getElementById("cpf").value; 
    novo.nome=document.getElementById("nome").value; 
    novo.email=document.getElementById("email").value; 
    novo.nasc=document.getElementById("nasc").value; 
    var jt = JSON.stringify(novo); 
    localStorage.setItem(novo.cpf, jt); 
    document.getElementById("btnRemover").classList.remove("d-none"); 
}
