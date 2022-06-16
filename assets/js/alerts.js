// <<<<<<< ALERT DE SIGNUP >>>>>>>>
let signUp = document.querySelector('#sign-up');
let msgSignUp = document.querySelector('.modal-signup');
let btnSignUp = document.querySelector('.btnSignUp');
let closeBtnSignup = document.querySelector('.signup__icon');
let formLogin = document.querySelector('.tela-login')

signUp.addEventListener('click', () =>{
    formLogin.style.display = "none"
    msgSignUp.classList.add('show-modal-signup');
    btnSignUp.focus();
});


closeBtnSignup.addEventListener('click',closeSignup); 



function closeSignup(){
    document.activeElement.blur();
    msgSignUp.classList.remove('show-modal-signup');
    formLogin.style.display = "block"
}


// <<<<<<< ALERT DE USUARIO E SENHA INVÁLIDOS >>>>>>>>


// <<<<<<< ALERT PARA SEM ACESSO >>>>>>>>
