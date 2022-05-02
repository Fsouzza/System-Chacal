const lista = document.querySelectorAll('.lista');


window.addEventListener('scroll', () => {
	document.querySelector('header').classList.toggle
	('window-scroll', window.scrollY > 0)
})




function ativarLink(){
	
	lista.forEach((item) =>
		item.classList.remove('active'));
	this.classList.add('active');
}




	lista.forEach((item) =>
	item.addEventListener('click', ativarLink));




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


const btnMenu = document.querySelector('.menu')
const navBar = document.querySelector('.navegacao')

btnMenu.addEventListener('click', () => {
	navBar.classList.toggle('navegacao--ativo')
})




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
