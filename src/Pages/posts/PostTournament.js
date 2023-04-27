import React, {Component} from 'react';
import Sport from "../../img/sport.jpeg";
import {
    Container,
    Form,
    Row,
    Col,
    Button,
    Image
     } from "react-bootstrap";

class PostTournament extends Component {
    render() {
        return (
            <Container>
                 <Row>
                  <Col>
                        <h1>
                          Українці Брайнін та Кравченко виграли парний титул на турнірі ITF M15 на Канарах
                        </h1>
                        <p>
                         Автор:noname | Дата:20.04.2023
                        </p>
                    </Col>
                </Row>

                <Row>
                  <Col>
                    <Image
                    width={500}
                    height={400}
                    src={Sport} fluid />
                  </Col>
                </Row>

                <Row>
                  <Col>
                        <p>
                            
                            Українські тенісисти Олександр Брайнін і Георгій Кравченко перемогли у парному розряді на турнірі серії ITF M15 на Канарах.

                            У вирішальному матчі за головний титул змагань наша команда перемогла лідерів посіву, іспанців Альберто Барросо/Серхіо Перес.

                            Рахунок поєдинку 2-1 (7-6; 6-7; 10-6) на користь наших співвітчизників.

                            Для українців це перший титул, виграний у парі один з одним. Також вони мають по одній перемозі на парних турнірах, але з іншими партнерами в команді.

                            Нагадаємо, що раніше Новак Джокович знявся із "мастерсу" в Мадриді.
                            Джерело:https://www.ua-football.com/ua/sport/tennis/1682247378-ukrayinci-braynin-ta-kravchenko-vigrali-parniy-titul-na-turniri-itf-m15-na-kanarah.html?utm_source=ukrnet&utm_medium=cpc&utm_campaign=uanewsukrnet
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
export default PostTournament;