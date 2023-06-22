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
            axios.get('/api/cadastros/' + query.id).then(resultado => {
                const cadastro = resultado.data

                for (let atributo in cadastro) {
                    setValue(atributo, cadastro[atributo])
                }
            })
        }
    }, [query.id])

    function salvar(dados) {
        axios.put('/api/cadastros/' + query.id, dados)
        push('/cadastros')
    }

    return (
        <Pagina titulo='Cadastro'>

            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome Sobrenome: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('cpf')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="unidade">
                    <Form.Label>Unidade: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('unidade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="condominio">
                    <Form.Label>Condomínio: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('condominio')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pagamento">
                    <Form.Label>Forma de Pagamento: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('pagamento')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <AiOutlineCheck className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href={'/condominios'}>
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>

        </Pagina>
    )
}

export default form
