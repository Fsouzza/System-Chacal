let AlertDeAcesso = document.getElementsByClassName('container-acesso');
let fecharAlertAcesso = document.querySelector('#sem-acesso-fechar');
let btnSemAcesso = document.querySelector('#sem-acesso-fechar');

function openAlert(){
    AlertDeAcesso.classList.add('show-modal-acesso');
    btnSemAcesso.focus();
}

function closeAlert(){
    document.activeElement.blur();
    AlertDeAcesso.classList.remove('show-modal-acesso');
    location.reload()  
}