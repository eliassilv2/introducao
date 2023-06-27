import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3 } from 'react-icons/bs'
import { HiOutlinePencilAlt } from 'react-icons/hi'

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
                <thead>
                    <tr>

                        <th>Excluir</th>
                        <th>Email</th>
                        <th>Nome</th>
                        <th>Comentário</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/feedbacks/' + i}>
                                    <HiOutlinePencilAlt title='Alterar' className='text-primary' />
                                </Link>
                                {' '}
                                <BsTrash3 title='Excluir' onClick={() => excluir(i)} className='text-warning' />
                            </td>
                            <td>{item.email}</td>
                            <td>{item.nome}</td>
                            <td>{item.comentario}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Pagina>
    )
}

export default index