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