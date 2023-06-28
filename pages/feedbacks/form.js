import Pagina from '@/components/Pagina'
import feedbackValidator from '@/validators/feedbackValidator'
import { Rate } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Alert, Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        const feedbacks = JSON.parse(window.localStorage.getItem('feedbacks')) || []
        feedbacks.push(dados)
        window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
        push('/feedbacks')
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
                            {...register('email', feedbackValidator.email)} 
                            placeholder='Coloque seu Email'/>
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
                            {...register('nome', feedbackValidator.nome)}
                            placeholder='Coloque seu Nome'/>
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
                            {...register('comentario')} 
                            placeholder='Opcional'/>
                        {
                            errors.comentario &&
                            <small className='mt-1'>{errors.comentario.message}</small>
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="avaliacao">
                        <Form.Label>Avaliação: <Rate /></Form.Label>
                        
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