import Pagina from '@/components/Pagina'
import trabalhoValidator from '@/validators/trabalhoValidator'
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
        const trabalhos = JSON.parse(window.localStorage.getItem('trabalhos')) || []
        trabalhos.push(dados)
        window.localStorage.setItem('trabalhos', JSON.stringify(trabalhos))
        push('/trabalhos')
    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }

    return (
        <Pagina titulo='Cadastro de Condomínio'>

            <Container className="d-flex justify-content-center align-items-top">
                <Form style={{
                    width: '50rem'
                }}>
                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome: </Form.Label>
                        <Form.Control
                            isInvalid={errors.nome}
                            type="text"
                            {...register('nome', trabalhoValidator.nome)} 
                            placeholder='Coloque seu Nome'/>
                        {
                            errors.nome &&
                            <small className='mt-1'>{errors.nome.message}</small>
                        }
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control
                            isInvalid={errors.email}                            
                             type="text"
                            {...register('email', trabalhoValidator.email)}                           
                            placeholder='Coloque seu email' />
                        {
                            errors.email &&
                            <small className='mt-1'>{errors.email.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefone">
                        <Form.Label>Telefone: </Form.Label>
                        <Form.Control
                            isInvalid={errors.telefone}
                            mask='(99)99999-9999'
                            maxLength={14}
                            type="text" 
                            {...register('telefone', trabalhoValidator.telefone)}
                            onChange={handleChange}
                            placeholder='(XX)XXXXX-XXXX' />
                        {
                            errors.telefone &&
                            <small className='mt-1'>{errors.telefone.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="interesse">
                        <Form.Label>Área de Interesse: </Form.Label>
                        <Form.Control
                            isInvalid={errors.interesse}
                            type="text" 
                            {...register('interesse', trabalhoValidator.interesse)}                         
                            placeholder='Sua Área de Interesse' />
                        {
                            errors.interesse &&
                            <small className='mt-1'>{errors.interesse.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="arquivo">
                        <Form.Label>Selecione o Arquivo:: </Form.Label>
                        <Form.Control
                            isInvalid={errors.arquivo}
                            type="file" 
                            {...register('arquivo', trabalhoValidator.arquivo)}                         
                            placeholder='Escolha o Arquivo' />
                        {
                            errors.arquivo &&
                            <small className='mt-1'>{errors.arquivo.message}</small>
                        }
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
            </Container>
        </Pagina>
    )
}

export default form