import React, { Component } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Image
} from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';

import { data } from '../shared/projectData';
import { IconButton } from '@mui/material';


class PostStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null
    };
  }

  ratePosts = (ratingValue) => {
    ratingValue+=1;
    this.setState({rating: ratingValue });
  };


  render() {
    return (
      <Container className='post'>
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

        {[...Array(5)].map((_,i) => (
          <IconButton
            key={i}
            onClick={() => this.ratePosts(i)}
            style={{color: (i < this.state.rating) ? 'yellow' : 'black'}}
          >
            <StarIcon />
          </IconButton>
        ))}
        <Form>
          <Form.Group className="mb-3" >
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