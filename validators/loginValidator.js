const loginValidator = {
    email: {
        required: 'Campo Obrigatório!',
    },

    senha: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 4,
            message: 'No Minimo 4 caracteres'
        }
    },

    confirme: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 4,
            message: 'No Minimo 4 caracteres'
        }
}
}
export default loginValidator 