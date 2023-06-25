import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap';
import Cabecalho2 from './Cabecalho2';

const Pagina2 = (props) => {

    return (
        <>
            <Cabecalho2 />
            <div className='bg-success text-black py-2 text-center '>
                <h1>Entrar</h1>
            </div>
            {props.children}
        </>
    )
}

export default Pagina2