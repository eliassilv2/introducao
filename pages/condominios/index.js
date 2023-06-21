import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaUserEdit } from 'react-icons/fa'
import { TbArrowBack, TbTrashFilled } from 'react-icons/tb'

const index = () => {

    const [condominios, setCondominios] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/condominios').then(resultado => {
            setCondominios(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/condominios/' + id)
            getAll()
        }
    }


    return (
        <Pagina titulo='Condomínios Cadastrados'>

            <div>
                <Table responsive='sm' striped bordered hover >
                    <thead>
                        <tr>
                            <th>Alterar</th>
                            <th>Nome Fantasia do Condomínio</th>
                            <th>CNPJ</th>
                            <th>Endereço</th>
                            <th>CEP</th>
                            <th>Qnt. de Blocos</th>
                            <th>Nome do Síndico</th>
                        </tr>
                    </thead>

                    <tbody>
                        {condominios.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/condominios/' + item.id}> 
                                        <FaUserEdit title='Alterar' className='text-info' />
                                    </Link>
                                    {' '}
                                    <TbTrashFilled title='Excluir' onClick={() => excluir(item.id)} className='text-dark' />
                                </td>
                                <td>{item.nome_fantasia}</td>
                                <td>{item.cnpj}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cep}</td>
                                <td>{item.blocos}</td>
                                <td>{item.nome_sindico}</td>
                            </tr>
                        ))}
                    </tbody>
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

                <Table className='table-success' responsive='sm' striped bordered  >
                    <thead>
                        <tr>
                            <th>Nome Fantasia do Condomínio</th>
                            <th>CNPJ</th>
                            <th>Endereço</th>
                            <th>CEP</th>
                            <th>Qnt. de Blocos</th>
                            <th>Nome do Síndico</th>
                        </tr>
                    </thead>

                    <tbody>
                            <tr>
                                <td>Residencial Alphaville</td>
                                <td>12.456.789/0001-44</td>
                                <td>Rua 10 Chácara 177, Set Hab Vicente Pires</td>
                                <td>71680-123</td>
                                <td>6 Blocos</td>
                                <td>Eustácio Oliveira</td>
                            </tr>    

                            <tr>
                                <td>Condomínio Living Park Sul</td>
                                <td>23.400.218/0001-22</td>
                                <td>SMAS Trecho 1 Superquadra Park Sul SQPS, Zona Industrial - Guará, Brasília - DF</td>
                                <td>71680-389</td>
                                <td>4 Blocos</td>
                                <td>Eustácio Oliveira</td>
                            </tr>

                            <tr>
                                <td>Riviera Dei Fiori</td>
                                <td>54.534.234/0001-75</td>
                                <td>Alameda das Acácias, Praça do Tucano, s/n, Brasília - DF</td>
                                <td>71442-459</td>
                                <td>4 Blocos</td>
                                <td>Vanessa Lima</td>
                            </tr>            
                    </tbody>
                </Table>            

            </div>
        </Pagina>
    );
}

export default index