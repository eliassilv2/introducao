import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from "@nextui-org/react";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaUserEdit } from 'react-icons/fa'
import { TbArrowBack, TbTrashFilled } from 'react-icons/tb'

const index = () => {

    const [condominios, setCondominios] = useState([])

    useEffect(() => {
        setCondominios(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('condominios')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('condominios', JSON.stringify(itens))
            setCondominios(itens)
        }
    }


    return (
        <Pagina titulo='Condomínios Cadastrados'>

            <div>
                <Table responsive='sm'>
                    <Table.Header>
                        <Table.Column>ALTERAR</Table.Column>
                        <Table.Column>NOME FANTASIA COND.</Table.Column>
                        <Table.Column>CNPJ</Table.Column>
                        <Table.Column>ENDEREÇO</Table.Column>
                        <Table.Column>CEP</Table.Column>
                        <Table.Column>QNT. BLOCOS</Table.Column>
                        <Table.Column>NOME SÍNDICO(A)</Table.Column>
                        <Table.Column>CPF SÍNDICO</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {condominios.map((item, i) => (
                            <Table.Row key={i}>
                                <Table.Cell>
                                    <Link href={'/condominios/' + i}>
                                        <FaUserEdit title='Alterar' className='text-info' />
                                        {''}
                                    </Link>
                                    <TbTrashFilled title='Excluir' onClick={() => excluir(i)} className='text-dark' />
                                </Table.Cell>
                                <Table.Cell>{item.nome_fantasia}</Table.Cell>
                                <Table.Cell>{item.cnpj}</Table.Cell>
                                <Table.Cell>{item.endereco}</Table.Cell>
                                <Table.Cell>{item.cep}</Table.Cell>
                                <Table.Cell>{item.blocos}</Table.Cell>
                                <Table.Cell>{item.nome_sindico}</Table.Cell>
                                <Table.Cell>{item.cpf_sindico}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>

                <div className='text-start mb-3'>
                    <Link href="/condominios/form" className=' btn btn-info'>
                        <AiOutlinePlusCircle className='me-1' />
                        Novo Condomínio
                    </Link>
                    <Link className='ms-2 btn btn-danger' href={'/page1'}>
                        <TbArrowBack className='me-2' />
                        Voltar
                    </Link>
                </div>

            </div>
        </Pagina>
    );
}

export default index