import React, {Component} from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    Button,
    Image
     } from "react-bootstrap";
import data from '../../WorkWithBlog';

class PostStart extends Component {
    render() {
        return (
            <Container>
                <Row>
                  <Col>
                        <h1>
                          {data[0].title}
                        </h1>
                        <p>
                         Автор:{data[0].author} | Дата:{data[0].date}
                        </p>
                    </Col>
                </Row>

                <Row>
                  <Col>
                    <Image
                    width={500}
                    height={400}
                     src={data[0].src} fluid />
                  </Col>
                </Row>

                <Row>
                  <Col>
                        <p>
                            {data[0].text}
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