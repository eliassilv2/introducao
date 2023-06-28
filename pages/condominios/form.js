import Pagina from '@/components/Pagina'
import condValidator from '@/validators/condValidator'
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
        const condominios = JSON.parse(window.localStorage.getItem('condominios')) || []
        condominios.push(dados)
        window.localStorage.setItem('condominios', JSON.stringify(condominios))
        push('/condominios')
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
                    <Form.Group className="mb-3" controlId="nome_fantasia">
                        <Form.Label>Nome Fantasia do Condomínio: </Form.Label>
                        <Form.Control
                            isInvalid={errors.nome_fantasia}
                            type="text"
                            {...register('nome_fantasia', condValidator.nome_fantasia)} 
                            placeholder='Coloque o Nome do Condomínio'/>
                        {
                            errors.nome &&
                            <small className='mt-1'>{errors.nome_fantasia.message}</small>
                        }
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="cnpj">
                        <Form.Label>CNPJ: </Form.Label>
                        <Form.Control
                            isInvalid={errors.cnpj}
                            mask='99.999.999/9999-99'
                            maxLength={18} type="text"
                            {...register('cnpj', condValidator.cnpj)}
                            onChange={handleChange}
                            placeholder='00.000.000/0000-00' />
                        {
                            errors.cnpj &&
                            <small className='mt-1'>{errors.cnpj.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="endereco">
                        <Form.Label>Endereço: </Form.Label>
                        <Form.Control
                            isInvalid={errors.endereco}
                            type="text" 
                            {...register('endereco', condValidator.endereco)}
                            placeholder='Digite o Endereço...' />
                        {
                            errors.endereco &&
                            <small className='mt-1'>{errors.endereco.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cep">
                        <Form.Label>CEP: </Form.Label>
                        <Form.Control
                            isInvalid={errors.cep}
                            mask='99999-999'
                            maxLength={9}
                            type="text" 
                            {...register('cep', condValidator.cep)}
                            onChange={handleChange}                           
                            placeholder='Digite o Endereço...' />
                        {
                            errors.cep &&
                            <small className='mt-1'>{errors.cep.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="blocos">
                        <Form.Label>Qnt. de Blocos: </Form.Label>
                        <Form.Control
                            isInvalid={errors.blocos}
                            type="text"
                            {...register('blocos', condValidator.blocos)} 
                            placeholder='Escreva a Quantidade'/>
                        {
                            errors.blocos &&
                            <small className='mt-1'>{errors.blocos.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nome_sindico">
                        <Form.Label>Nome do Síndico: </Form.Label>
                        <Form.Control
                            isInvalid={errors.nome_sindico}
                            type="text"
                            {...register('nome_sindico', condValidator.nome_sindico)} 
                            placeholder='Coloque o Nome do Síndico'/>
                        {
                            errors.nome_sindico &&
                            <small className='mt-1'>{errors.nome_sindico.message}</small>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF do Síndico: </Form.Label>
                        <Form.Control
                            isInvalid={errors.cpf}
                            mask='999.999.999-99'
                            maxLength={14}
                            type="text"
                            onChange={handleChange}
                            {...register('cpf', condValidator.cpf)}
                            placeholder='000.000.000-00'/> 
                        {
                            errors.cpf &&
                            <small className='mt-1'>{errors.cpf.message}</small>
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