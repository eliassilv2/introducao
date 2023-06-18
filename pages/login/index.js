import Pagina2 from '@/components/Pagina2'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const index = () => {
  
  return (
    <Pagina2>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite o email" />
          </Form.Group>

          <Form.Group controlId="senha">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite a senha" />
          </Form.Group>
          <div className='text-center'>
            <Button
              variant="success"
              type="submit"
              href='../page1'>
              Entrar
            </Button>
          </div>
        </Form>
      </div>
    </Pagina2>
  )
}

export default index