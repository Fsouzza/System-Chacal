// <<<<<<< ALERT DE SIGNUP >>>>>>>>
let msgSignUp = document.querySelector('.modal-signup');
let formLogin = document.querySelector('.tela-login');

let inputLogin = document.getElementById('username');
let inputSenha = document.getElementById('senha');


export function abrirSignup(){
    let btnSignUp = document.querySelector('.btnSignUp');

    limpaInputs();
    formLogin.style.display = "none"
    msgSignUp.classList.add('show-modal-signup');
    btnSignUp.focus();
}


export function closeSignup(){
    formLogin.style.display = "block"
    msgSignUp.classList.remove('show-modal-signup');
    limpaInputs();
}


export function limpaInputs(){
    inputLogin.value = '';
    inputSenha.value = '';
    msgSignUp.classList.remove('show-modal-signup');
}



// <<<<<<< ALERT PARA SEM ACESSO >>>>>>>>

//location.reload();



