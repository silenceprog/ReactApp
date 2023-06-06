import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';

import { data } from '../shared/projectData';
import { IconButton } from '@mui/material';
import { Database } from '../../Components/Database';


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
        <Database />

      </Container>
    )
  }
}
export default PostStart;