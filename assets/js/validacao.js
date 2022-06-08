// MENSAGEM DE ERRO NOS CAMPOS DE LOGIN
export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}



const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de usuário está vazio.',
        patternMismatch: 'Insira o @ mais o usuário cadastrado.'
    },
    senha: {
        valueMissing: 'O campo de senha está vazio.',
        patternMismatch: 'insira letra maiúscula, número e símbolo.'
    },
}


function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagem
}
