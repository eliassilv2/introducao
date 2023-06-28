import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'

const form = () => {

    const { push, query } = useRouter()
    const [feedback, setFeedback] = useState({})
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const feedbacks = JSON.parse(window.localStorage.getItem('feedbacks'))
            const feedback = feedbacks[query.id]

            for(let atributo in feedback){
                setValue(atributo, feedback[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const feedbacks = JSON.parse(window.localStorage.getItem('feedbacks')) || []
        feedbacks.push(dados)
        window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
        push('/feedbacks')
    }

    return (
        <Pagina titulo='Cadastro'>

            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('email')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('nome')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href={'/page1'}>
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form
