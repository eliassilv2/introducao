import Pagina from '@/components/Pagina'
import cadastroValidator from '@/validators/cadastroValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineCheck } from 'react-icons/ai'
import { TbArrowBack } from 'react-icons/tb'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {
        const cadastros = JSON.parse(window.localStorage.getItem('cadastros')) || []
        cadastros.push(dados)
        window.localStorage.setItem('cadastros', JSON.stringify(cadastros))
        push('/cadastros')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Cadastro'>

            <Container className="d-flex justify-content-center align-items-top">
                <Form style={{
                    width: '50rem'
                }}>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome Sobrenome: </Form.Label>
                        <Form.Control
                            isInvalid={errors.nome}
                            type="text"
                            {...register('nome')} />
                        {
                            errors.nome &&
                            <small className='mt-1'>{errors.nome.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF: </Form.Label>
                        <Form.Control
                            isInvalid={errors.cpf}
                            mask='999.999.999-99'
                            maxLength={14} type="text"
                            {...register('cpf', cadastroValidator.cpf)}
                            onChange={handleChange}
                            placeholder='000.000.000-00' />
                        {
                            errors.cpf &&
                            <small className='mt-1'>{errors.cpf.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="unidade">
                        <Form.Label>Unidade: </Form.Label>
                        <Form.Control
                            isInvalid={errors.unidade}
                            maxLength={7} type="text" {...
                            register('unidade', cadastroValidator.unidade)}
                            placeholder='Blocos a, b ou c' />
                        {
                            errors.unidade &&
                            <small className='mt-1'>{errors.unidade.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="condominio">
                        <Form.Label>Condomínio: </Form.Label>
                        <Form.Control
                            isInvalid={errors.condominio}
                            type="text"
                            {...register('condominio', cadastroValidator.condominio)} />
                        {
                            errors.condominio &&
                            <small className='mt-1'>{errors.condominio.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="pagamento">
                        <Form.Label>Forma de Pagamento: </Form.Label>
                        <Form.Control
                            isInvalid={errors.pagamento}
                            type="text"
                            {...register('pagamento', cadastroValidator.pagamento)} />
                        {
                            errors.pagamento &&
                            <small className='mt-1'>{errors.pagamento.message}</small>
                        }

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
            </Container>
        </Pagina>
    )
}

export default form