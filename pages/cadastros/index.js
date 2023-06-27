import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
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
                <Table responsive='sm' striped bordered hover >
                    <thead>
                        <tr>
                            <th>Alterar</th>
                            <th>Nome Sobrenome</th>
                            <th>CPF</th>
                            <th>Unidade Escolhida</th>
                            <th>Condomínio</th>
                            <th>Forma de Pagamento</th>
                        </tr>
                    </thead> 

                    <tbody>
                        {cadastros.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/cadastros/' +i}>
                                        <FaUserEdit title='Alterar' className='text-info' />
                                    </Link>
                                    {' '}
                                    <TbTrashFilled title='Excluir' onClick={() => excluir(i)} className='text-dark' />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.unidade}</td>
                                <td>{item.condominio}</td>
                                <td>{item.pagamento}</td>
                            </tr>
                        ))}
                    </tbody>
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