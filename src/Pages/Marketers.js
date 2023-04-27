import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button
     } from "react-bootstrap";
import Denis from "../img/viktor-hesse.jpg";
import Oksana from "../img/joshua-rawson-harris.jpg";
import Olena from "../img/chase-fade.jpg";

class Marketers extends Component {
    render() {
        return (
            <Container>
      <Row>
        <Col>
          <h1 className="my-4">Наші маркетологи</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Img
              width={300}
              height={400}
              variant="top"
              src={Denis} />
            <Card.Body>
              <Card.Title>Денис Давидяк</Card.Title>
              <Card.Text>
              Збір та обробка статистичної інформації, обробка інформації щодо ринку, змін та перспектив, ведення внутрішнього
               обліку та баз даних, написання звітів про діяльність компанії.
              Відповідальний, організований, цілеспрямований, працьовитий, комунікабельний, пунктуальний, уміння працювати в
               команді, швидка освіта, системність, аналітичний склад розуму.
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
              src={Oksana} />
            <Card.Body>
              <Card.Title>Оксана Гудзій</Card.Title>
              <Card.Text>
              Написання прогнозів щодо ринку; написання аналізу та розгляд перспектив щодо продукту/ринку, 
              а також місце компанії в даному сегменті, оформлення передплати різні аналітичні ресурси,
              проведення якісних та кількісних маркетингових досліджень.
              Здатня до самонавчання, самореалізації та самоствердження.
               Комунікабельна, пунктуальна, мобільна. Є гарні організаторські та лідерські здібності. Досвідчений командний гравець.
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
              src={Olena} />
            <Card.Body>
              <Card.Title>Олена Каганюк</Card.Title>
              <Card.Text>
                Оцінка ринку, аналіз тенденцій розвитку ринку, моніторинг відкритих джерел інформації, написання аналітичних звітів, розробка рекламних макетів інше.
                Комунікабельний, пунктуальний, мобільний. Здатній до самонавчання, самореалізації та самоствердження. 
                Є гарні організаторські та лідерські здібності.
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
export default Marketers;