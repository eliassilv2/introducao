import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho2 = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="../login">Condomínios</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho2