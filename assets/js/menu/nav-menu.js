// VARIAVEIS DO MENU LATERAL
const lista = document.querySelectorAll('.lista');


// VARIAVEIS DO MENU LATERAL MOBILE VERSION
const gridDropMenu = document.querySelector('.menu')
const navMenuMobile = document.querySelector('.navegacao')



// ------> FUNÇÃO DE LINK ATIVO <------ //
function ativarLink(){
	
	lista.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active');
}


// ------> ATIVAR LINK MENU <------ //
lista.forEach((item) =>
item.addEventListener('click', ativarLink));


// ------> ATIVAR LINK MENU MOBILE <------ //
gridDropMenu.addEventListener('click', () => {
	navMenuMobile.classList.toggle('navegacao--ativo')
})