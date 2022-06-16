var modal = document.querySelector('.modal-container');
var endereco = document.querySelectorAll('.btnEndereco');
var mapa = document.querySelector('#mapa')
var dialogOverlay = document.querySelector('.dialog-overlay');


function openModal(){
    modal.classList.add('show');
    mapa.focus();
}

function closeModal(){
    document.activeElement.blur();
    modal.classList.remove('show');
    endereco.forEach((item) => item.classList.remove('ativo'));
}

dialogOverlay.addEventListener('click', closeModal);

document.addEventListener('keyup', function(evento) {
  if (evento.keyCode == 27) {
      closeModal();
    }
});


function copyText(){
    let textoCopiado = document.getElementById("copiar");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert(`O texto copiado é ${textoCopiado.value}`);
}