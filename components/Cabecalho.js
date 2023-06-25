import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="../logins">Condomínios</Navbar.Brand>
          <Nav className="text-center">
              <Nav.Link href="../page1">Inicio</Nav.Link>
              <Nav.Link href="../">Condomínios</Nav.Link>
              <Nav.Link href="../">Moradores</Nav.Link>
              <Nav.Link href="../condominios/form">Novo Condomínio</Nav.Link>
              <Nav.Link href="../">Cadastros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho