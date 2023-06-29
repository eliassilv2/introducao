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
    const [trabalho, setTrabalho] = useState({})
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const trabalhos = JSON.parse(window.localStorage.getItem('trabalhos'))
            const trabalho = trabalhos[query.id]

            for(let atributo in trabalho){
                setValue(atributo, trabalho[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const trabalhos = JSON.parse(window.localStorage.getItem('trabalhos')) || []
        trabalhos.push(dados)
        window.localStorage.setItem('trabalhos', JSON.stringify(trabalhos))
        push('/trabalhos')
    }

    return (
        <Pagina titulo='Cadastro'>

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('nome')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('telefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="interesse">
                    <Form.Label>Área de Interesse: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('interesse')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="arquivo">
                    <Form.Label>Selecione o Arquivo: </Form.Label>
                    <Form.Control
                        type="file"
                        {...register('arquivo')} />
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
