import React, { Component } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Image
} from "react-bootstrap";
import Summer from '../../img/summer.jpg';
import { data } from '../shared/projectData';
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';

class PostTemperature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null
    };
  }

  ratePosts = (ratingValue) => {
    ratingValue += 1;
    this.setState({ rating: ratingValue });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>
              {data[1].title}
            </h1>
            <p>
              Автор:{data[1].author} | Дата:{data[1].date}
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Image
              width={500}
              height={400}
              src={Summer} fluid />
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              {data[1].text}
            </p>
          </Col>
        </Row>

        {[...Array(5)].map((_, i) => (
          <IconButton
            key={i}
            onClick={() => this.ratePosts(i)}
            style={{ color: (i < this.state.rating) ? 'yellow' : 'black' }}
          >
            <StarIcon />
          </IconButton>
        ))}
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
export default PostTemperature;