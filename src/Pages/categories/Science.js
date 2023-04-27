import React, {Component} from 'react';
import {Container, Col, Row, Card, ListGroup,Button} from "react-bootstrap";
import Summer from "../../img/summer.jpg";

class Science extends Component {
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
                                            src={Summer}
                                            alt="photo"
                                            />
                            </div>
                                        <Card.Body className="flex-grow-1 ms-3">
                                            <Card.Title>Ель-Ніньо повернеться: кліматологи прогнозують найспекотніший рік в історії</Card.Title>
                                            <Card.Text>
                                            За даними Reuters, Ель-Ніньйо та Ла-Нінья - це характерні для екваторіальної зони Тихого океану...
                                            </Card.Text>
                                            <Button variant="primary" href="/blogs/science/post-the-hottest-year/2">Читати далі</Button>
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

export default Science;
