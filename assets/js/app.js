import { abrirSignup, closeSignup } from './alert/alerts.js';
import { valida } from './validacao.js'

// VARIAVEIS DE VALIDACAO
const inputs = document.querySelectorAll('input');

// VARIAVEIS DE ALERT
let signUp = document.querySelector('#sign-up');
let closeBtnSignup = document.querySelector('.signup__icon');
let btnOk = document.querySelector('.btnSignUp');


// ------> ATIVAR VALIDACOES <------ //
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
});


// ------> EVENTOS CLICK <------ //
signUp.addEventListener('click',abrirSignup);
closeBtnSignup.addEventListener('click',closeSignup); 
btnOk.addEventListener('click',closeSignup);

