import React, {Component} from 'react';
import {Container, Col, Row, Card, ListGroup,Button} from "react-bootstrap";
import Birthday from '../img/birthday.jpg';
import Summer from "../img/summer.jpg";
import Sport from "../img/sport.jpeg";

class Blog extends Component {
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
                                            src={Birthday}
                                            alt="photo"
                                            />
                            </div>
                                        <Card.Body className="flex-grow-1 ms-3">
                                            <Card.Title>Створення сайту</Card.Title>
                                            <Card.Text>
                                            Попри складнощі які виникали при створені сайту, сайт готовий до роботи...
                                            </Card.Text>
                                            <Button variant="primary" href="/blogs/news/post-start/1">Читати далі</Button>
                                        </Card.Body>
                        </Card>
                      
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

                        <Card className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                        <Card.Img 
                                            width={150}
                                            height={150}
                                            className="mr-3"
                                            src={Sport}
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
                        
                        <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Blog;
