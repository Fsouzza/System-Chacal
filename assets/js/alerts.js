// <<<<<<< ALERT DE SIGNUP >>>>>>>>
let signUp = document.querySelector('#sign-up');
let msgSignUp = document.querySelector('.modal-signup');
let btnSignUp = document.querySelector('.btnSignUp');
let closeBtnSignup = document.querySelector('.signup__icon');


signUp.addEventListener('click', () =>{
    msgSignUp.classList.add('show-modal-signup');
    btnSignUp.focus();
});


closeBtnSignup.addEventListener('click',closeSignup); 



function closeSignup(){
    document.activeElement.blur();
    msgSignUp.classList.remove('show-modal-signup');
}


// <<<<<<< ALERT DE USUARIO E SENHA INVÁLIDOS >>>>>>>>


// <<<<<<< ALERT PARA SEM ACESSO >>>>>>>>
