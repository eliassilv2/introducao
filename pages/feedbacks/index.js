import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from "@nextui-org/react";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { FaUserEdit } from 'react-icons/fa';
import { TbTrashFilled } from 'react-icons/tb';

const index = () => {

    const [feedbacks, setFeedbacks] = useState([])

    useEffect(() => {
        setFeedbacks(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('feedbacks')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('feedbacks', JSON.stringify(itens))
            setFeedbacks(itens)
        }
    }

    return (
        <Pagina titulo='Feedbacks'>

            <Link href="/feedbacks/form" className='mb-2 btn btn-primary'>
                <AiOutlinePlus className='me-1' />
                Novo Feedback
            </Link>
            <Table striped bordered hover >
                <Table.Header>
                    <Table.Column>ALTERAR</Table.Column>
                    <Table.Column>EMAIL</Table.Column>
                    <Table.Column>NOME</Table.Column>
                    <Table.Column>COMENTÁRIO</Table.Column>
                    <Table.Column>AVALIAÇÃO</Table.Column>
                </Table.Header>
                <Table.Body>
                        {feedbacks.map((item, i) => (
                            <Table.Row key={i}>
                                <Table.Cell>
                                    <Link href={'/feedbacks/' + i}>
                                        <FaUserEdit title='Alterar' className='text-info' />
                                        {''}
                                    </Link>
                                    <TbTrashFilled title='Excluir' onClick={() => excluir(i)} className='text-dark' />
                                </Table.Cell>
                                <Table.Cell>{item.email}</Table.Cell>
                                <Table.Cell>{item.nome}</Table.Cell>
                                <Table.Cell>{item.comentario}</Table.Cell>
                                <Table.Cell>{item.avaliacao}</Table.Cell>                               
                            </Table.Row>
                        ))}
                    </Table.Body>
            </Table>

        </Pagina>
    )
}

export default index