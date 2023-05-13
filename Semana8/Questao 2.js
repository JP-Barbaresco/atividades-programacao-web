
//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: João Pedro Camargo Silva Barbaresco
//DATA: 13/05/2023 

function adicionarItem() {
    var input = document.getElementById("item");
    var list = document.getElementById("list");
    var newItem = document.createElement("li");
    newItem.innerText = input.value;
    list.appendChild(newItem);
    input.value = "";
  }
  
  //Explicação
  // Pega o elemento de input usando o ID "item" e o armazena na variável "input".
  // Pega o elemento de lista usando o ID "list" e o armazena na variável "list".
  // Cria um novo elemento <li> usando a função createElement() e o armazena na variável "newItem".
  // Define o conteúdo do novo elemento usando a propriedade innerText e o valor do input.
  // Adiciona o novo elemento à lista existente usando a função appendChild().
  // Limpa o valor do input atribuindo uma string vazia à propriedade value.