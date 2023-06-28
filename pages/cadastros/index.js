import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from "@nextui-org/react";
import { AiOutlinePlus, AiOutlinePlusCircle } from 'react-icons/ai'
import { FaUserEdit } from 'react-icons/fa'
import { TbArrowBack, TbTrashFilled } from 'react-icons/tb'

const index = () => {

    const [cadastros, setCadastros] = useState([])

    useEffect(() => {
        setCadastros(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('cadastros')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('cadastros', JSON.stringify(itens))
            setCadastros(itens)
        }
    }

    return (
        <Pagina titulo='Clientes Cadastrados'>

            <div>
                <Table responsive='sm'
                    aria-label="Example table with static content"
                    css={{
                        height: "auto",
                        minWidth: "100%",
                    }}
                >
                    <Table.Header>
                        <Table.Column>ALTERAR</Table.Column>
                        <Table.Column>NAME SOBRENOME</Table.Column>
                        <Table.Column>CPF</Table.Column>
                        <Table.Column>UNIDADE ESCOLHIDA</Table.Column>
                        <Table.Column>CONDOMÍNIO</Table.Column>
                        <Table.Column>FORMA DE PAGAMENTO</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {cadastros.map((item, i) => (
                            <Table.Row key={i}>
                                <Table.Cell>
                                    <Link href={'/cadastros/' + i}>
                                        <FaUserEdit title='Alterar' className='text-info'/>
                                        {''}
                                    </Link>
                                    <TbTrashFilled title='Excluir' onClick={() => excluir(i)} className='text-dark'/>
                                </Table.Cell>
                                <Table.Cell>{item.nome}</Table.Cell>
                                <Table.Cell>{item.cpf}</Table.Cell>
                                <Table.Cell>{item.unidade}</Table.Cell>
                                <Table.Cell>{item.condominio}</Table.Cell>
                                <Table.Cell>{item.pagamento}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
                <div className='text-start'>
                    <Link href="/cadastros/form" className=' btn btn-info'>
                        <AiOutlinePlusCircle className='me-1' />
                        Novo Cadastro
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