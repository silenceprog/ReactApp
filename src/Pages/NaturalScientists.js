import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button
     } from "react-bootstrap";
import Adam from "../img/kato-blackmore.jpg";
import Armen from "../img/roman-holoschchuk.jpg";
import Oleg from "../img/vicky-hladynet.jpg";

class NaturalScientists extends Component {
    render() {
        return (
            <Container>
            <Row>
              <Col>
                <h1 className="my-4">Наші природознавці</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Img
                   width={300}
                   height={400}
                   variant="top"
                   src={Adam} />
                  <Card.Body>
                    <Card.Title>Адам Іванов</Card.Title>
                    <Card.Text>
                      Комунікабельний, відповідальний, наполегливий, легко знаходжу спільну мову з новими людьми, швидко адаптуюсь.
                    </Card.Text>
                    <Button variant="primary">Связаться</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                   width={300}
                   height={400}
                   variant="top"
                   src={Armen} />
                  <Card.Body>
                    <Card.Title>Армен Оганесян</Card.Title>
                    <Card.Text>
                        Чесний, відповідальний, уважний до деталей.
                        Дисциплінований, пунктуальний, комунікабельний.
                    </Card.Text>
                    <Button variant="primary">Связаться</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img
                    width={300}
                    height={400} 
                    variant="top"
                    src={Oleg} />
                  <Card.Body>
                    <Card.Title>Олег Заруба</Card.Title>
                    <Card.Text>
                      Цілеспрямований, пунктуальний, відповідальний, швидко навчаюся.Хоббі - подорожі, спорт, музика, самовдосконалення.
                    </Card.Text>
                    <Button variant="primary">Связаться</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )
        }
    }
export default NaturalScientists;