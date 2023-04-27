import React, {Component} from 'react';
import Birthday from '../../img/birthday.jpg';
import {
    Container,
    Form,
    Row,
    Col,
    Button,
    Image
     } from "react-bootstrap";

class PostStart extends Component {
    render() {
        return (
            <Container>
                <Row>
                  <Col>
                        <h1>
                            Створення сайту
                        </h1>
                        <p>
                         Автор:admin | Дата:20.04.2023
                        </p>
                    </Col>
                </Row>

                <Row>
                  <Col>
                    <Image
                    width={500}
                    height={400}
                     src={Birthday} fluid />
                  </Col>
                </Row>

                <Row>
                  <Col>
                        <p>
                            Попри складнощі які виникали при створені сайту, сайт готовий до роботи.
                            Сайт буде дороблюватися для того щоб вирішити незручності користувачів.
                        </p>
                    </Col>
                </Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Залишити коментар:</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary">Відправити</Button>
                        </Form>
                   
            </Container>
        )
        }
    }
export default PostStart;