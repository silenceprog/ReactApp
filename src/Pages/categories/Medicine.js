import React, {Component} from 'react';
import {Container, Col, Row, Card, ListGroup,Button} from "react-bootstrap";

class Medicine extends Component {
    render() {
        return (
            <Container>
                <Row>
                <Col md="9">
                
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

export default Medicine;
