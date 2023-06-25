import Pagina2 from '@/components/Pagina2'
import Link from 'next/link'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const index = () => {

  return (
    <Pagina2 titulo='Entrar'>
      <div style={{
        backgroundImage: 'url(images/condominio.jpg)',
        backgroundSize: 'cover'
      }}>
        <Container className="d-flex justify-content-center align-items-center" style={{
          height: '100vh'
        }}>
          <Form style={{
            background: 'rgba(80, 80, 80, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            width: '25rem ',
            borderRadius: '12px'
          }}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="seu email aqui..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cadastro">
              <Link href={'login1/form'}>
                Cadastre-me
              </Link>
            </Form.Group>

            <div className='text-center'>
              <Button
                variant="success"
                href={'/page1'}>
                Entrar
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </Pagina2 >
  )
}

export default index