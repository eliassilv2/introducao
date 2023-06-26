import Pagina from '@/components/Pagina'
import { Rate } from 'antd'
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
        axios.post('', dados)
        push('/')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }


    return (
        <Pagina titulo='Feedback'>
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

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome: </Form.Label>
                        <Form.Control
                            isInvalid={errors.nome}
                            type="text"
                            {...register('nome')} />
                        {
                            errors.nome &&
                            <small className='mt-1'>{errors.nome.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="comentario">
                        <Form.Label>Deixe um Comentário: </Form.Label>
                        <Form.Control
                            isInvalid={errors.comentario}
                            type="text"
                            {...register('comentario')} />
                        {
                            errors.comentario &&
                            <small className='mt-1'>{errors.comentario.message}</small>
                        }
                    </Form.Group>
                    <p>Avalie-nos</p>
                    <Rate />

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