const cadastroValidator = {
    nome: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'O Minimo é 3'
        },
    },

    cpf: {
        required: 'Preencha o campo!',
        
    },

    unidade: {
        required: 'Selecione a Unidade',
        minLength: {
            value: 7,
            message: 'O Minimo é 6'
        },
        maxLength: {
            value: 7,
            message: 'Apenas 6 caracteres'
        }
    },

    condominio: {
        required: 'Selecione um Condomínio',
    },

    pagamento: {
        required: 'Selecione uma Forma de Pagamento',
        minLength: {
            value: 3,
            message: 'O Minimo é 3'
        },
        maxLength: {
            value: 7,
            message: 'Apenas 7 caracteres'
        }
    },
}

export default cadastroValidator