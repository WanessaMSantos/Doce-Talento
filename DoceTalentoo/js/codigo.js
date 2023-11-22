//exemplo do campo invocando: mascara(this,'cpf')

function mascara(i, t) {
  // Obtém o valor atual do campo de entrada
  var v = i.value;
  
  //A função isNaN() determina se o valor é NaN ou não.
  //NaN - Not a number, não é um número.
  
  // Verifica se o último caractere digitado não é um número.
  // Se não for um número, remove o último caractere e retorna,
  // o que impede a entrada de caracteres inválidos.
  if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  // Verifica o tipo de máscara a ser aplicada.
  if (t == "data") {
    // Para máscara de data, define o limite máximo de caracteres para 10.
    i.setAttribute("maxlength", "10");
	
    // Adiciona barras (/) após o segundo e o quinto caracteres digitados, 
    // para formatar a data no formato "dd/mm/aaaa".
	// length -  comprimento
    if (v.length == 2 || v.length == 5) i.value += "/"; // 02/08/2023
  }

  if (t == "cpf") {
    // Para máscara de CPF, define o limite máximo de caracteres para 14.
    i.setAttribute("maxlength", "14");
    // Adiciona pontos (.) após o terceiro e o sétimo caracteres digitados
    // e um hífen (-) após o décimo primeiro caractere,
    // para formatar o CPF no padrão "###.###.###-##".
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
  }

  if (t == "cnpj") {
    // Para máscara de CNPJ, define o limite máximo de caracteres para 18.
    i.setAttribute("maxlength", "18");
    // Adiciona pontos (.) após o segundo e o sexto caracteres digitados,
    // uma barra (/) após o décimo caractere e um hífen (-) após o décimo quinto caractere,
    // para formatar o CNPJ no padrão "##.###.###/####-##".
    if (v.length == 2 || v.length == 6) i.value += ".";
    if (v.length == 10) i.value += "/";
    if (v.length == 15) i.value += "-";
  }

  if (t == "cep") {
    // Para máscara de CEP, define o limite máximo de caracteres para 9.
    i.setAttribute("maxlength", "9");
    // Adiciona um hífen (-) após o quinto caractere, 
    // para formatar o CEP no padrão "#####-###".
    if (v.length == 5) i.value += "-";
  }

  if (t === "telefone") {
    
/*
    Esse bloco de código foi criado para modificar o valor da variável i
    dependendo do tamanho da variável v. Se v.length for igual a 1,
    um parêntese de abertura é adicionado ao início do valor de i, e
    se v.length for igual a 3, um parêntese de fechamento seguido de um espaço em branco 
    é adicionado ao final do valor de i. Se v.length não for nem 1 nem 3, nenhuma modificação
    é feita no valor de i.   (##)
*/                            
	
	if (v.length === 1) i.value = "(" + i.value;
    if (v.length === 3) i.value += ") ";
	
	
	// Para máscara de telefone, verifica se o primeiro caractere digitado é 9,
    // indicando um número de celular. Se for, define o limite máximo de caracteres para 15,
    // e adiciona parênteses e um hífen no formato "(##) #####-####".
    // Caso contrário, define o limite máximo de caracteres para 14,
    // e adiciona parênteses e um hífen no formato "(##) ####-####".
    if (v[5] == 9) { // se for 9 dígitos (celular)
      i.setAttribute("maxlength", "15"); 
      if (v.length === 10) i.value += "-";  // para (##) #####-####
    } else {
      i.setAttribute("maxlength", "14"); // 9 dígitos (telefone fixo)
      if (v.length === 9) i.value += "-"; // para (##) #####-####
    }
  }
}




function testa_form(){
	   
	   var a = document.forms["formcontatos"] ["email"].value;
	   
	   var c = document.forms["formcontatos"] ["telefone"].value;
	   
	   if (a == null || a=="") { 
			
			alert ("O E-mail precisa ser informado");
			return false;
	   }
	   
	   if (c == null || c=="") {
		   
		   alert ("O telefone precisa ser informado");
		   return false; 
		   
	   }
	   
	   
	   
	   
	   
	   
}


function validateEmail(){
	var emailInput = document.getElementById("emailInput").value;
	
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if (emailPattern.test(emailInput)) {
		document.getElementById("resultMessage").innerText = "E-mail válido!";
		document.getElementById("resultMessage").style.color = "green";
		
		//alert ("E-mail válido!");
	} else {
		//alert ("E-mail inválido!"); 
		document.getElementById("resultMessage").innerText = "E-mail inválido!";
		document.getElementById("resultMessage").style.color = "red";
	}
	
}

/*
function validateGender() {
  const gender = document.getElementById('gender').value;

  switch (gender) {
    case 'male':
      alert('Gênero selecionado: Masculino');
      break;
    case 'female':
      alert('Gênero selecionado: Feminino');
      break;
    case 'other':
      alert('Gênero selecionado: Outro');
      break;
    default:
      alert('Selecione um gênero válido');
  }

}*/

const submenus = document.querySelectorAll('.submenu');

// Adiciona um ouvinte de evento de clique a cada item de menu
document.querySelectorAll('#menu > li').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
        // Fecha todos os submenus
        submenus.forEach(submenu => {
            submenu.style.display = 'none';
        });

        // Abre o submenu correspondente ao menu clicado
        const submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });
});


const video = document.querySelector('video');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = 'Pausar';
    } else {
        video.pause();
        playButton.textContent = 'Play';
    }
});



function openFilePicker() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click();

  fileInput.addEventListener("change", function () {
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
      alert("Você selecionou o arquivo: " + selectedFile.name);
    }
  });
}

// Selecione o elemento do dropdown
const dropdown = document.getElementById("meuDropdown");

// Função para fechar o dropdown
function fecharDropdown() {
  dropdown.style.display = "none";
}

// Adicione um atraso de 4 segundos (4000 milissegundos) antes de fechar o dropdown
function atrasarFechamento() {
  setTimeout(fecharDropdown, 4000); // Atraso de 4 segundos
}

// Exemplo de evento que aciona o atraso de fechamento (por exemplo, um botão)
const botaoFechar = document.getElementById("botaoFechar");

botaoFechar.addEventListener("click", atrasarFechamento);












