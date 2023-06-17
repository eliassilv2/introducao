import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const index = () => {
    return (
        <Pagina>
            <Row md={4}>
                <Col>
                    <Card border='success' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alphavillebrasilia.net.br%2Falphaville-brasilia-df%2F&psig=AOvVaw0xUsxJ5hmHyi9-YAIoN3Ht&ust=1687048892596000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjElo2Jyf8CFQAAAAAdAAAAABAI' />
                        <Card.Body>
                            <Card.Title>Condomínio Alphaville</Card.Title>
                            <Card.Text>
                                Ocupando uma área de mais de 20 milhões de metros quadrados de pura qualidade de vida, a região foi escolhida e
                                cuidadosamente pensada para abrigar um projeto urbano sofisticado e totalmente voltado para o bem estar,
                                conveniência, segurança e lazer de seus moradores.
                            </Card.Text>
                            <Button variant="success">Alugar</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card border='success' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Condomínio</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">Alugar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border='success' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Condomínio</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">Alugar</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card border='success' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>Condomínio</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="success">Alugar</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Pagina>
    )
}

export default index
