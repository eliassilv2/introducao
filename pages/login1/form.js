import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {
        const login1 = JSON.parse(window.localStorage.getItem('login1')) || []
        login1.push(dados)
        window.localStorage.setItem('login1', JSON.stringify(login1))
        push('/login1')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }


    return (
        <Pagina titulo='Cadastro Login'>
            <Container className="d-flex justify-content-center align-items-top">
                <Form style={{
                    width: '50rem'
                }}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control
                            isInvalid={errors.email}
                            type="text"
                            {...register('email')} />
                        {
                            errors.email &&
                            <small className='mt-1'>{errors.email.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="senha">
                        <Form.Label>Senha: </Form.Label>
                        <Form.Control
                            isInvalid={errors.senha}
                            type="text"
                            {...register('senha')} />
                        {
                            errors.senha &&
                            <small className='mt-1'>{errors.senha.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="senha">
                        <Form.Label>Confirme Senha: </Form.Label>
                        <Form.Control
                            isInvalid={errors.senha}
                            type="text"
                            {...register('senha')} />
                        {
                            errors.senha &&
                            <small className='mt-1'>{errors.senha.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="confirme">
                        <Form.Label>Confirme a Senha: </Form.Label>
                        <Form.Control
                            isInvalid={errors.confirme}
                            type="text"
                            {...register('confirme')} />
                        {
                            errors.confirme &&
                            <small className='mt-1'>{errors.confirme.message}</small>
                        }
                    </Form.Group>

                    <div className='text-center'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <AiOutlineCheck className='me-2' />
                            Salvar
                        </Button>
                        <Link className='ms-2 btn btn-danger' href={'/cursos'}>
                            <TbArrowBack className='me-2' />
                            Voltar
                        </Link>
                    </div>
                </Form>
            </Container>
        </Pagina>
    )
}

export default form 