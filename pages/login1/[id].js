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
    const [login, setLogin] = useState({})
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const login1 = JSON.parse(window.localStorage.getItem('login1'))
            const login = login1[query.id]

            for(let atributo in login){
                setValue(atributo, login[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const login1 = JSON.parse(window.localStorage.getItem('login1')) || []
        login1.push(dados)
        window.localStorage.setItem('login1', JSON.stringify(login1))
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

                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Confirme Senha: </Form.Label>
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
