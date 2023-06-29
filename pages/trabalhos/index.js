import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from "@nextui-org/react";
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaUserEdit } from 'react-icons/fa'
import { TbArrowBack, TbTrashFilled } from 'react-icons/tb'
import { Download } from '@mui/icons-material';

const index = () => {

    const [trabalhos, setTrabalhos] = useState([])

    useEffect(() => {
        setTrabalhos(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('trabalhos')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('trabalhos', JSON.stringify(itens))
            setTrabalhos(itens)
        }
    }


    return (
        <Pagina titulo='Condomínios Cadastrados'>

            <div>
                <Table responsive='sm'>
                    <Table.Header>
                        <Table.Column>ALTERAR</Table.Column>
                        <Table.Column>NOME</Table.Column>
                        <Table.Column>EMAIL</Table.Column>
                        <Table.Column>TELEFONE</Table.Column>
                        <Table.Column>ÁREA DE INTERESSE</Table.Column>
                        <Table.Column>ARQUIVO</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {trabalhos.map((item, i) => (
                            <Table.Row key={i}>
                                <Table.Cell>
                                    <Link href={'/trabalhos/' + i}>
                                        <FaUserEdit title='Alterar' className='text-info' />
                                        {''}
                                    </Link>
                                    <TbTrashFilled title='Excluir' onClick={() => excluir(i)} className='text-dark' />
                                </Table.Cell>
                                <Table.Cell>{item.nome}</Table.Cell>
                                <Table.Cell>{item.email}</Table.Cell>
                                <Table.Cell>{item.telefone}</Table.Cell>
                                <Table.Cell>{item.interesse}</Table.Cell>
                                <Table.Cell>
                                    <Download /> Arquivo
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>

                <div className='text-start mb-3'>
                    <Link href="/trabalhos/form" className=' btn btn-info'>
                        <AiOutlinePlusCircle className='me-1' />
                        Novo Formulário
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