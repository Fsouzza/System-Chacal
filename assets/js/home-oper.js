const lista = document.querySelectorAll('.lista');
const ancora = document.querySelectorAll('.cabecalho__lista--link');
const ancoraMbl = document.querySelectorAll('.mobile__lista--link');


/* SCROLL DO MOUSE - MENU FIXO */
window.addEventListener('scroll', () => {
	document.querySelector('header').classList.toggle
	('window-scroll', window.scrollY > 0)
})




/* MENU ATIVO MENU NAVBAR */
function ativarLink(){
	
	lista.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active');
}

lista.forEach((item) =>
item.addEventListener('click', ativarLink));



/* ALERT PARA LINKS SEM ACESSO */
function semAcesso(){
	Swal.fire({
		icon: 'warning',
		title: 'Atenção!',
		text: 'Você não possui acesso a este campo',
	  })

}




/* MENU HEADER VERSION DESKTOP */
function ativarAncora(){
	
	ancora.forEach((item) =>
	item.classList.remove('ativo'));
	this.classList.add('ativo');
}

ancora.forEach((item) =>
item.addEventListener('click', ativarAncora));




/* ICONE HIDE E SHOW CAIXA DE PERGUNTAS */
const faqs = document.querySelectorAll('.perg');

faqs.forEach(perg => {
	perg.addEventListener('click', () => {
		perg.classList.toggle('open');

		const icon = perg.querySelector('.perg__icon i');

		if(icon.className === 'uil uil-plus'){
			icon.className = "uil uil-minus"
		} else{
			icon.className = "uil uil-plus"
		}

	})
})



/* funcao menu mobile navbar */
const btnMenu = document.querySelector('.menu')
const navBar = document.querySelector('.navegacao')

btnMenu.addEventListener('click', () => {
	navBar.classList.toggle('navegacao--ativo')
})



/* ALTERACAO ICON DO HEADER MOBILE OPEN E CLOSE */
const btnPlus = document.querySelector('#open-apps');
const menu2 = document.querySelector('.ul-mobile');
const btnClose = document.querySelector('#close-apps');

btnPlus.addEventListener('click', () => {
	menu2.classList.toggle('apps-open');
	btnClose.style.display = "inline-block";
	btnPlus.style.display = "none";

})


const closeMenu2 = () => {
		menu2.classList.remove('apps-open');
		btnClose.style.display = "none";
		btnPlus.style.display = "inline-block";
}

btnClose.addEventListener('click', closeMenu2);





/* MENU HEADER VERSION MOBILE - ITEM SELECIONADO */
function ativarAncora2(){
	
	ancoraMbl.forEach((item) =>
	item.classList.remove('ativo'));
	this.classList.add('ativo');
	closeMenu2();
}

ancoraMbl.forEach((item) =>
item.addEventListener('click', ativarAncora2));
