import React from 'react';
import { Card, Button } from "react-bootstrap";

export const BlogCard = ({ title, text, src, date }) => {

    return (
        <Card className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
                <Card.Img
                    width={150}
                    height={150}
                    className="mr-3"
                    src={src}
                    alt="photo"
                />
            </div>
            <Card.Body className="flex-grow-1 ms-3">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary" href="/blogs/news/post-start/1">Читати далі</Button>
                <Card.Footer>
                    Дата:{date}
                </Card.Footer>
            </Card.Body>
        </Card>

    );
} 
