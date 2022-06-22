// <<<<<<< ALERT DE SIGNUP >>>>>>>>
let msgSignUp = document.querySelector('.modal-signup');
let formLogin = document.querySelector('.tela-login');

let inputLogin = document.getElementById('username');
let inputSenha = document.getElementById('senha');

export function abrirSignup(){
    limpaInputs();
    formLogin.style.display = "none"
    msgSignUp.classList.add('show-modal-signup');
}


export function closeSignup(){
    formLogin.style.display = "block"
    msgSignUp.classList.remove('show-modal-signup');
    limpaInputs();
}


export function limpaInputs(){
    msgSignUp.classList.remove('show-modal-signup');
    inputLogin.value = '';
    inputSenha.value = '';
    return
}


// <<<<<<< ALERT PARA SEM ACESSO >>>>>>>>


