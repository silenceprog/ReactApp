import React, {Component} from 'react';
import CarouselBoxHk from "../Components/CarouselBoxHk";
import {Button, Card, Container} from "react-bootstrap";
import Developers from "../img/developer.jpg";
import NatureScience from "../img/natureScience.jpg";
import Marketers from "../img/marketers.jpg";


class Home extends Component {
    render() {
        return (
                <Container>
                     <CarouselBoxHk/>
                    <h2 className="text-center m-4">Our team</h2>
                        <div className="row">
                            <div className="col">
                                <Card className="m-4 text-center" bg="light" border="primary">
                                    <Card.Img
                                        width={300}
                                        height={400}
                                        variant="top"
                                        src={Developers}
                                    />
                                    <Card.Body>
                                        <Card.Title>Розробники</Card.Title>
                                        <Card.Text>
                                            Команда 1
                                        </Card.Text>
                                        <Button variant="primary" href="/about-team/dev">About team</Button>
                                    </Card.Body>
                                </Card>
                           </div>
                        <div className="col">
                                <Card className="m-4 text-center" bg="light">
                                    <Card.Img
                                        width={300}
                                        height={400}
                                        variant="top"
                                        src={NatureScience}
                                    />
                                    <Card.Body>
                                        <Card.Title>Природознавці</Card.Title>
                                        <Card.Text>
                                            Команда 2
                                        </Card.Text>
                                        <Button variant="primary" href="/about-team/nature">About team</Button>
                                    </Card.Body>
                                </Card>
                                </div>

                                    <div className="col">
                                <Card className="m-4 text-center" bg="light">
                                    <Card.Img
                                        width={300}
                                        height={400}
                                        variant="top"
                                        src={Marketers}
                                    />
                                    <Card.Body>
                                        <Card.Title>Маркетилоги</Card.Title>
                                        <Card.Text>
                                            Команда 3
                                        </Card.Text>
                                        <Button variant="primary" href="/about-team/marketers">About team</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                </Container>
                
        );
    }
}

export default Home;
