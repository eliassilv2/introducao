const trabalhoValidator = {
    nome: {
        required: 'Campo Obrigatório!',
    },

    email: {
        required: 'Campo Obrigatório!',
    },

    telefone: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 14,
            message: 'Coloque o Número Completo'
        }
    },
    
    interesse: {
        required: 'Campo Obrigatório!',
    },

    arquivo: {
        required: 'Escolha o Arquivo!',
    }
}
export default trabalhoValidator 