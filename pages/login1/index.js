import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaUserEdit } from 'react-icons/fa'
import { TbArrowBack, TbTrashFilled } from 'react-icons/tb'

const index = () => {

  const [login1, setLogins] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/login1').then(resultado => {
      setLogins(resultado.data);
    })
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      axios.delete('/api/login1/' + id)
      getAll()
    }
  }


  return (
    <Pagina titulo='Usuários Cadastrados'>

      <div>
        <Table responsive='sm' striped bordered hover >
          <thead>
            <tr>
              <th>Alterar</th>
              <th>Email</th>
              <th>Senha</th>
            </tr>
          </thead>

          <tbody>
            {login1.map((item, i) => (
              <tr key={i}>
                <td>
                  <Link href={'/login1/' + i}>
                    <FaUserEdit title='Alterar' className='text-info' />
                  </Link>
                  {' '}
                  <TbTrashFilled title='Excluir' onClick={() => excluir(i)} className='text-dark' />
                </td>
                <td>{item.email}</td>
                <td>{item.senha}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className='text-start mb-3'>
          <Link href="/login1/form" className=' btn btn-info'>
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
              <th>Emails</th>
              <th>Senhas</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Residencial Alphaville</td>
              <td>12.456.789/0001-44</td>
            </tr>

            <tr>
              <td>Condomínio Living Park Sul</td>
              <td>23.400.218/0001-22</td>
            </tr>

            <tr>
              <td>Riviera Dei Fiori</td>
              <td>54.534.234/0001-75</td>
            </tr>
          </tbody>
        </Table>

      </div>
    </Pagina>
  );
}

export default index