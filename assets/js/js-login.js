// SUCESSO AO FAZER LOGIN
function log(){
	location.href = "home.html";
}



// VALIDACAO DE ACESSO
function acessar(){

	var login = document.getElementById('username').value;
	var senha = document.getElementById('senha').value;

	
	if(login == "@admin" && senha == "Ch@cal3107"){
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Welcome to workspace',
			showConfirmButton: false,
			timer: 2500
		});

		log();

	} else{
		Swal.fire({
			icon: 'error',
			title: 'ERRO!',
			text: 'O usuário, ou senha estão inválidos.'
		})
	};
}


// BUSCAR VALIDACAO DE USUARIO
var signUp = document.querySelector('#sign-up');


signUp.addEventListener('click', () => {
	
	alert('Contacte o administrador do sistema para autorizar seu acesso!')


})
	
	







