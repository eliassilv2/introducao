import Pagina from '@/components/Pagina'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const index = () => {
    return (
        <Pagina>
            <Row md={3}>
                <Col>
                    <Card >
                        <CardMedia
                            component="img"
                            height="250"
                            image='../images/alphaville.jpg'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Alphaville
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Ocupando uma área de mais de 20 milhões de metros quadrados de pura qualidade de vida, a região foi escolhida e
                                cuidadosamente pensada para abrigar um projeto urbano sofisticado e totalmente voltado para o bem estar,
                                conveniência, segurança e lazer de seus moradores.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button >Alugar</Button>
                        </CardActions>
                    </Card>
                </Col>

                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Living Park Sul
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button >Alugar</Button>
                        </CardActions>
                    </Card>
                </Col>

                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Alugar</Button>
                        </CardActions>
                    </Card>
                </Col>

            </Row>
        </Pagina>
    )
}

export default index
