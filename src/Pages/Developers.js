import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button
     } from "react-bootstrap";
import Maria from "../img/seth-doyle.jpg";
import Max from "../img/thom-holmes.jpg";
import Makar from "../img/whereslugo.jpg";

class Developers extends Component {
    render() {
        return (
            <Container>
            <Row>
              <Col>
                <h1 className="my-4">Наші розробники</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Card.Img 
                   width={300}
                   height={400}
                   variant="top"
                   src={Makar} />
                  <Card.Body>
                    <Card.Title>Макар Бабота</Card.Title>
                    <Card.Text>
                      Написання скриптів WSH (JScript) для полегшення виконання повсякденних задач (моніторинг інстальованого на робочих станціях програмного забезпечення, перевірка коректності зарплатних файлів від клієнтів, тощо);
                      розробка фільтрів, показників та звітів для АБС "Б2" (за допомогою SQL-запитів);
                      розробка програми для обробки результатів інвентаризації (FoxPro);
                      розробка різноманітних документів Excel (з використанням Visual Basic for Applications);
                      Аналітичний розум,відповідальність,увага до дрібниць,творчі здібності.
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
                    src={Max} />
                  <Card.Body>
                    <Card.Title>Максим Андрушко</Card.Title>
                    <Card.Text>
                    Знання JavaScript, Angularjs, TypeScript, SASS, CSS, HTML, Bootstrap.Складання тех.завдання та узгодження його із 
                    замовником.Середній рівень знання технічної англійської.
                    Здатність дотримуватися дедлайнів,вміння працювати в команді,вміння об'єктивно оцінювати свої можливості на вирішення поставлених завдань,
                    спрямованість на результат,постійне бажання освоювати нові технології та інструменти.
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
                    src={Maria} />
                  <Card.Body>
                    <Card.Title>Марія Верещак</Card.Title>
                    <Card.Text>
                        Робота з базами даних (MySQL, MariaDB, MongoDB).Робота з MVC Framework (CakePHP).Робота із тестовим середовищем для PHP (PHPUnit).
                        TV Archive, написання методів панелі управління / методів SOAP, робота з ТБ та відеоконтентом, робота з JWPlayer.
                        Логічне мислення,ініціативна,здатня планувати та слідувати планам,вміння працювати в команді,гнучкість мислення
                        відповідальна, завзята, цілеспрямована
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
export default Developers;