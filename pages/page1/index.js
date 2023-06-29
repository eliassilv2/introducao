import Pagina from '@/components/Pagina'
import { CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

const index = () => {
    
    return (
        <Pagina>
  

            <Row md={4}>
                <Col className='mb-3'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/alphaville.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Residencial Alphaville
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Ocupando uma área de mais de 20 milhões de metros quadrados de pura qualidade de vida, a região foi escolhida e
                                cuidadosamente pensada para abrigar um projeto urbano sofisticado e totalmente voltado para o bem estar,
                                conveniência, segurança e lazer de seus moradores.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={'/cadastros/form'}>
                                <Button variant='success' size="small">Alugar Unidade</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Col>


                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/living.jpg"
                            title="living"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Condomínio Living Park Sul
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descubra o Living Park Sul, um condomínio exclusivo e moderno localizado na vibrante cidade de Brasília.
                                Combinando estilo de vida contemporâneo e conforto excepcional, o Living Park Sul oferece um ambiente
                                tranquilo e sofisticado para você e sua família desfrutarem.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={'/cadastros/form'}>
                                <Button variant='success' size="small">Alugar Unidade</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Col>
                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/riviera.jpg"
                            title="riviera"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Condomínio Riviera Dei Fiori
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descubra um estilo de vida único e luxuoso no condomínio Riviera dei Fiori.
                                Localizado em uma das áreas mais deslumbrantes e desejadas de Águas Claras,
                                esse paraíso tropical oferece um refúgio exclusivo para você e sua família.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={'/cadastros/form'}>
                                <Button variant='success' size="small">Alugar Unidade</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Col>

                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/laguna.jpg"
                            title="toplife"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Condomínio Laguna Top Life
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Descubra o Condomínio Top Life, um lugar perfeito para viver com conforto,
                                segurança e praticidade em Águas Claras-DF. Se você busca um estilo de vida
                                moderno e com diversas opções de lazer, o Condomínio Top Life é a escolha certa.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={'/cadastros/form'}>
                                <Button variant='success' size="small">Alugar Unidade</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Col>
                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="/images/vivace.jpg"
                            title="vivacetag"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Condomínio Vivace
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Estamos felizes em apresentar o Condomínio Vivace,
                                uma oportunidade única de viver com conforto e qualidade de vida em Taguatinga-DF.
                                Descubra um lugar onde a segurança, a comodidade e o bem-estar se encontram para proporcionar
                                uma experiência residencial excepcional.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link href={'/cadastros/form'}>
                                <Button variant='success' size="small">Alugar Unidade</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Col>
            </Row>

        </Pagina>
    )
}

export default index