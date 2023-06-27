import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { FaUserEdit } from 'react-icons/fa'
import { TbArrowBack, TbTrashFilled } from 'react-icons/tb'

const index = () => {

  const [login1, setLogin1] = useState([])

    useEffect(() => {
        setLogin1(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('login1')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro? ')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('login1', JSON.stringify(itens))
            setLogin1(itens)
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
            Novo Usuário
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