// VARIAVEIS DAS ANCORAS HEADER
const ancora = document.querySelectorAll('.cabecalho__lista--link');
const ancoraMbl = document.querySelectorAll('.mobile__lista--link');

// VARIAVEIS DAS ANCORAS HEADER-MOBILE
const dropMenu = document.querySelector('.ul-mobile');
const plusMobile = document.querySelector('#open-apps');
const closeMobile = document.querySelector('#close-apps');


// ------> FUNÇÃO DE ANCORA ATIVA <------ //
function ativarAncora(){
	ancora.forEach((item) =>
	item.classList.remove('ativo'));
	this.classList.add('ativo');
}

function ancoraMobile(){
	ancoraMbl.forEach((item) =>
	item.classList.remove('ativo'));
	this.classList.add('ativo');
	closeMenu2();
}


// ------> ATIVAR ANCORA <------ //
ancora.forEach((item) =>
item.addEventListener('click', ativarAncora));


ancoraMbl.forEach((item) =>
item.addEventListener('click', ancoraMobile));


// ------> ATIVAR E DESATIVAR DROP-MENU MOBILE <------ //
plusMobile.addEventListener('click', () => {
	dropMenu.classList.toggle('apps-open');
	closeMobile.style.display = "inline-block";
	plusMobile.style.display = "none";

});

const dropmenu= () => {
    dropMenu.classList.remove('apps-open');
    closeMobile.style.display = "none";
    plusMobile.style.display = "inline-block";
};

closeMobile.addEventListener('click', dropmenu);
