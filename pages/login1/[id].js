import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            axios.get('/api/login1/' + query.id).then(resultado => {
                const login = resultado.data

                for (let atributo in login) {
                    setValue(atributo, login[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/login1/' + query.id, dados)
        push('/login1')
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


                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Senha: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('senha')} />
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
