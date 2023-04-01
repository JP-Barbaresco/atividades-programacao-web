// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: João Pedro Camargo Silva Barbaresco 
// DATA: 28/03/2023  

// Dados dos pacientes
var pacientes = [];

// Dados dos médicos
var medicos = [  { nome: "Dr. José Silva", especialidade: "Clínico Geral" },  { nome: "Dra. Ana Santos", especialidade: "Dermatologista" },  { nome: "Dr. João Oliveira", especialidade: "Pediatra" }];

// Dados das consultas
var consultas = [];

// Tela de cadastro de pacientes
var formPaciente = document.getElementById("form-paciente");
formPaciente.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Obter os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var dataNascimento = document.getElementById("data-nascimento").value;
  var cpf = document.getElementById("cpf").value;
  var endereco = document.getElementById("endereco").value;
  var telefone = document.getElementById("telefone").value;
  
  // Criar um objeto paciente com os valores dos campos
  var paciente = {
    nome: nome,
    dataNascimento: dataNascimento,
    cpf: cpf,
    endereco: endereco,
    telefone: telefone
  };
  
  // Adicionar o paciente ao array de pacientes
  pacientes.push(paciente);
  
  // Limpar os valores dos campos do formulário
  formPaciente.reset();
  
  // Exibir uma mensagem de sucesso
  alert("Paciente cadastrado com sucesso!");
});

// Tela de agendamento de consulta
var calendar = document.getElementById("calendar");
var selectMedico = document.getElementById("select-medico");
var selectTipoConsulta = document.getElementById("select-tipo-consulta");

// Preencher o calendário com os dias do mês atual
var date = new Date();
var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
for (var i = 1; i <= daysInMonth; i++) {
  var button = document.createElement("button");
  button.innerText = i;
  calendar.appendChild(button);
}

// Adicionar um evento de clique a cada botão do calendário
var buttons = calendar.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    // Obter a data selecionada
    var day = event.target.innerText;
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var dateSelected = year + "-" + month + "-" + day;
    
    // Obter o médico selecionado
    var medicoSelected = selectMedico.value;
    
    // Obter o tipo de consulta selecionado
    var tipoConsultaSelected = selectTipoConsulta.value;
    
    // Criar um objeto consulta com os valores selecionados
    var consulta = {
      paciente: null,
      medico: medicoSelected,
      data: dateSelected,
      tipoConsulta: tipoConsultaSelected
    };
    
    // Adicionar a consulta ao array de consultas
    consultas.push(consulta);
    
    // Exibir uma mensagem de sucesso
    alert("Consulta agendada com sucesso!");
  });
}

// Tela de consulta de pacientes
var formBuscaPaciente = document.getElementById("form-busca-paciente");
formBuscaPaciente.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Obter o valor do campo de busca
  var busca = document.getElementById("busca").value.toLowerCase();
  
 
// Filtrar os pacientes que correspondem à busca
var pacientesFiltrados = pacientes.filter(function(paciente) {
    var nome = paciente.nome.toLowerCase();
    var cpf = paciente.cpf.toLowerCase();
    return nome.includes(busca) || cpf.includes(busca);
    });
    
    // Limpar a lista de pacientes
    var listaPacientes = document.getElementById("lista-pacientes");
    listaPacientes.innerHTML = "";
    
    // Adicionar cada paciente encontrado à lista de pacientes
    pacientesFiltrados.forEach(function(paciente) {
    var li = document.createElement("li");
    li.innerText = paciente.nome + " (" + paciente.cpf + ")";
    listaPacientes.appendChild(li);
    });
    });
    
    // Tela de consulta de consultas
    var listaConsultas = document.getElementById("lista-consultas");
    
    // Preencher a lista de consultas com as consultas agendadas
    consultas.forEach(function(consulta) {
    var li = document.createElement("li");
    li.innerText = consulta.data + " - " + consulta.medico + " - " + consulta.tipoConsulta;
    listaConsultas.appendChild(li);
    });
    
    // Tela com lista de medicamento interativa (js) que possibilita adicionar e remover medicamentos
    var listaMedicamentos = document.getElementById("lista-medicamentos");
    var formMedicamento = document.getElementById("form-medicamento");
    var inputMedicamento = document.getElementById("input-medicamento");
    
    // Adicionar um evento de submit ao formulário de medicamento
    formMedicamento.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obter o valor do campo de medicamento
    var medicamento = inputMedicamento.value;
    
    // Criar um elemento de lista para o medicamento
    var li = document.createElement("li");
    li.innerText = medicamento;
    
    // Adicionar um botão para remover o medicamento
    var buttonRemover = document.createElement("button");
    buttonRemover.innerText = "Remover";
    buttonRemover.addEventListener("click", function(event) {
    listaMedicamentos.removeChild(li);
    });
    li.appendChild(buttonRemover);
    
    // Adicionar o elemento de lista à lista de medicamentos
    listaMedicamentos.appendChild(li);
    
    // Limpar o valor do campo de medicamento
    inputMedicamento.value = "";
    });