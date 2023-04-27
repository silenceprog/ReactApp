import React, {Component} from 'react';
import {Container, Col, Row, Card, ListGroup,Button} from "react-bootstrap";
import Sports from "../../img/sport.jpeg";

class Sport extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                        <Card.Img 
                                            width={150}
                                            height={150}
                                            className="mr-3"
                                            src={Sports}
                                            alt="photo"
                                            />
                            </div>
                                        <Card.Body className="flex-grow-1 ms-3">
                                            <Card.Title>Українці Брайнін та Кравченко виграли парний титул на турнірі ITF M15 на Канарах</Card.Title>
                                            <Card.Text>
                                            Українські тенісисти Олександр Брайнін і Георгій Кравченко перемогли у парному розряді...
                                            </Card.Text>
                                            <Button variant="primary" href="/blogs/sport/post-win-tournament/3">Читати далі</Button>
                                        </Card.Body>
                        </Card>

                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категорії</h5>

                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item action href='/blogs/news'>Новини</ListGroup.Item>
                                <ListGroup.Item action href='/blogs/travel'>Подорожі</ListGroup.Item>
                                <ListGroup.Item action href='/blogs/medicine'>Медицина</ListGroup.Item>
                                <ListGroup.Item action href='/blogs/sport'>Спорт</ListGroup.Item>
                                <ListGroup.Item action href='/blogs/science'>Наука</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                    
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Sport;
