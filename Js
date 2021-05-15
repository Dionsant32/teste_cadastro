function gravar(){ //Função que grava os dados da interface na LocalStorage
    var novo = new Object(); //Cria um novo objeto "vazio"
    novo.cpf=document.getElementById("cpf").value; //Busca, na interface, o conteúdo do input "cpf" e o define como atributo do objeto "novo"
    novo.nome=document.getElementById("nome").value; //Busca, na interface, o conteúdo do input "nome" e o define como atributo do objeto "novo"
    novo.email=document.getElementById("email").value; //Busca, na interface, o conteúdo do input "email" e o define como atributo do objeto "novo"
    novo.nasc=document.getElementById("nasc").value; //Busca, na interface, o conteúdo do input "nasc" e o define como atributo do objeto "novo"
    var jt = JSON.stringify(novo); //Gera um JSON com as propriedades do objeto "novo"
    localStorage.setItem(novo.cpf, jt); //Armazena o JSON gerado utilizando o CPF como chave
    document.getElementById("btnRemover").classList.remove("d-none"); //Torna o botão "remover" visível na interface
}
