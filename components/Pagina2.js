import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap';
import Cabecalho2 from './Cabecalho2';

const Pagina2 = (props) => {

    return (
        <>
        <Cabecalho2 />
            <div className='bg-success text-black py-3 text-center mb-3'>
                <h1>Cadastre-se</h1>
            </div>
            
            <Container className='mb-5'>
                {props.children}
            </Container>
        </>
    )
}

export default Pagina2