// FUNCOES DE ACESSO
function acessoPermitido(){
	location.href = "home.html";
}

function acessoNegado(){
	let erroAcesso = document.querySelector('.login-erro');
	erroAcesso.classList.add('show-login-erro');
}



// VALIDACAO DE ACESSO
function acessar(){
	let login = document.getElementById('username').value;
	let senha = document.getElementById('senha').value;

	if(login == "@admin" && senha == "Ch@cal3107"){
		acessoPermitido();	
	} else{
		acessoNegado();
		return
	}	
}

	
	







