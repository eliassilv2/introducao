const condValidator = {
    nome_fantasia: {
        required: 'Campo Obrigatório!',
    },

    cnpj: {
        required: 'Preencha o campo!',
        minLength: {
            value: 18,
            message: 'Preencha o Campo Completo'
        }
    },

    endereco: {
        required: 'Campo Obrigatório!',
    },

    cep: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 9,
            message: 'Preencha o Campo Completo'
        }
    },

    blocos: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 1,
            message: 'O Minimo é 1'
        },
        maxLength: {
            value: 8,
            message: 'Apenas 8 caracteres'
        }
    },

    nome_sindico: {
        required: 'Coloque o Nome do Sídico!',
        minLength: {
            value: 3,
            message: 'O Minimo é 3'
        }
    },

    cpf: {
        required: 'Coloque o CPF do Síndico',
        minLength: {
            value: 14,
            message: 'Preencha o Campo Completo'
        }
    },
}

export default condValidator