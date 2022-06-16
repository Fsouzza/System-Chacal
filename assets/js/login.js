



// VALIDACAO DE ACESSO
function acessar(){
	let login = document.getElementById('username').value;
	let senha = document.getElementById('senha').value;

	if(login == "@admin" && senha == "Ch@cal3107"){
		location.href = "home.html";
	} else{
		Swal.fire({
			icon: 'error',
			title: 'ERRO!',
			text: 'O usuário, ou senha estão inválidos.'
		})
	};
}
	
	







