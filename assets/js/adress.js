let modal = document.querySelector('.modal-container');
let endereco = document.querySelectorAll('btnEndereco');


function openModal(){
    modal.classList.add('show');
}

function closeModal(){
    modal.classList.remove('show');
    endereco.classList.remove('ativo');
}