import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const index = () => {
    return (
        <Pagina>
            <Row md={4}>
                <Col>
                    <Card
                        border='success'
                        style={{ width: '16rem' }}>
                        <Card.Img
                            variant="top"
                            src='images/alphaville.jpg' />
                        <Card.Body>
                            <Card.Title>Condomínio Alphaville</Card.Title>
                            <Card.Text>
                                Ocupando uma área de mais de 20 milhões de metros quadrados de pura qualidade de vida, a região foi escolhida e
                                cuidadosamente pensada para abrigar um projeto urbano sofisticado e totalmente voltado para o bem estar,
                                conveniência, segurança e lazer de seus moradores.
                            </Card.Text>
                            <Link href={'/cadastros/form'}>
                                <Button variant="success">Alugar Unidade</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card
                        border='success'
                        style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Condomínio Living Park Sul</Card.Title>
                            <Card.Text>
                                O Condomínio Living Superquadra Park Sul é equipado
                                com diversas instalações, como piscina.
                            </Card.Text>
                            <Link href={'/cadastros/form'}>
                                <Button variant="success">Alugar Unidade</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        border='success'
                        style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Condomínio</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link href={'/cadastros/form'}>
                                <Button variant="success">Alugar Unidade</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card
                        border='success'
                        style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Condomínio</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link href={'/cadastros/form'}>
                                <Button variant="success">Alugar Unidade</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Pagina>
    )
}

export default index
