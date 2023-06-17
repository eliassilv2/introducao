import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="../login">Condomínios</Navbar.Brand>
          <Nav className="text-center">
              <Nav.Link href="../condominios">Condomínios</Nav.Link>
              <Nav.Link href="../">Unidades</Nav.Link>
              <Nav.Link href="../">Moradores</Nav.Link>
              <Nav.Link href="../">Regiões</Nav.Link>
              <Nav.Link href="/"></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho