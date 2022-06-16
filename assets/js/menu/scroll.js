// VARIAVEIS DE SCROLL
const header = document.querySelector('header');


// ------> FUNÇÃO DE SCROLL <------ //
function scrollHeader(){
	header.classList.toggle('window-scroll', window.scrollY > 0)
}


// ------> ATIVAR SCROLL <------ //
window.addEventListener('scroll',scrollHeader);