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
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/cadastros').then(resultado => {
            setCadastros(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/cadastros/' + id)
            getAll()
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
                        {cadastros.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/cadastros/' + item.id}>
                                        <FaUserEdit title='Alterar' className='text-info' />
                                    </Link>
                                    {' '}
                                    <TbTrashFilled title='Excluir' onClick={() => excluir(item.id)} className='text-dark' />
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