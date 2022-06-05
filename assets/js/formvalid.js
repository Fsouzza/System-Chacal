export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

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
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        patternMismatch: 'O nome deve conter apenas letras.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        patternMismatch: 'O email digitado não é válido.'
    },
    username: {
        valueMissing: 'O campo de Username não pode estar vazio.',
        patternMismatch: 'Crie login com @ mais o username cadastrado.'
    },
    code: {
        valueMissing: 'O campo de ID não pode estar vazio.',
        patternMismatch: 'O ID deve ter apenas números.'
    },
    password: {
        valueMissing: 'O campo senha não pode estar vazio.',
        patternMismatch: 'Conter 6 a 12 dígitos, com ao menos uma letra maiúscula e um símbolo.'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'A pessoa deve ser maior que 18 anos.',
        typeMismatch: 'A pessoa deve ser maior que 18 anos.'
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        customError: 'O CPF digitado não é válido.' 
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input),
}

function mostraMensagemDeErro(tipoDeInput, input) {
    var mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })
    
    return mensagem
}
