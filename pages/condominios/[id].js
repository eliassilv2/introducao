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
    const [condominio, setCondominio] = useState({})
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const condominios = JSON.parse(window.localStorage.getItem('condominios'))
            const condominio = condominios[query.id]

            for(let atributo in condominio){
                setValue(atributo, condominio[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const condominios = JSON.parse(window.localStorage.getItem('condominios')) || []
        condominios.push(dados)
        window.localStorage.setItem('condominios', JSON.stringify(condominios))
        push('/condominios')
    }

    return (
        <Pagina titulo='Cadastro'>

            <Form>
                <Form.Group className="mb-3" controlId="nome_fantasia">
                    <Form.Label>Nome Fantasia do Condomínio: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('nome_fantasia')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="cnpj">
                    <Form.Label>CNPJ: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('cnpj')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="endereco">
                    <Form.Label>Endereço: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('endereco')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control
                        type='text'
                        {...register('cep')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="nome_sindico">
                    <Form.Label>Nome do Síndico: </Form.Label>
                    <Form.Control
                        type="text"
                        {...register('nome_sindico')} />
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
