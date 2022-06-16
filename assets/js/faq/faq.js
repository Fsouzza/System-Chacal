
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