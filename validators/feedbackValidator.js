const feedbackValidator = {
    email: {
        required: 'Campo Obrigatório!',
    },

    nome: {
        required: 'Campo Obrigatório!',
        minLength: {
            value: 3,
            message: 'Preencha o Campo Completo'
        }
    }
}

export default feedbackValidator 