import React, {useState} from 'react';
import {Container, Col, Row, Card, ListGroup,Button} from "react-bootstrap";
import { BlogCard } from './BlogComponents/BlogCard';
import { data } from './shared/projectData';
import {Pagination} from '../Components/Pagination';
import Categories from '../Components/Categories';


const Blog = () => {
    
   const [dataArr,setDataArr] = useState(data);
   const [isOldestFirst, setOldestFirst] = useState(true);
   const [currentPage,setCurrentPage] = useState(1);
    const [countElemPage] = useState(2);
    const lastPostIndex = currentPage * countElemPage;
    const firstPostIndex = lastPostIndex - countElemPage;
    const currentPost = data.slice(firstPostIndex,lastPostIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const sortByDate = () => {
        const temp = [...dataArr];
        if (isOldestFirst) {
        temp.sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
        });
        setOldestFirst(!isOldestFirst);
        }
        else {
            temp.sort((a, b) => {
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
            });
            setOldestFirst(!isOldestFirst);
            }
        setDataArr(temp);
    };

    const chooseCategory = (category) => {
        if(category === "all"){
            setDataArr(dataArr);
        }
        else{
        setDataArr(data.filter(el => el.category === category));
        }
    }


        return (
            <Container>
                <Row>
                    <Col md="9">
                    <Button onClick={() => sortByDate()}>Sort by Date</Button>
                    <Categories chooseCategory={chooseCategory}/>
                        {dataArr.slice(firstPostIndex,lastPostIndex).map((item,index) => (
                          <BlogCard
                          key = {index}
                          title = {item.title}
                          text = {item.text}
                          src = {item.src}
                          date = {item.date}  
                          />   
                        ))}

                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категорії</h5>

                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item action href='/blogs/news'>Новини</ListGroup.Item>
                                <ListGroup.Item action href='/blogs/travel'>Подорожі</ListGroup.Item>
                                <ListGroup.Item action href='/blogs/medicine'>Медицина</ListGroup.Item>
                                <ListGroup.Item action href='/blogs/sport'>Спорт</ListGroup.Item>
                                <ListGroup.Item action href='/blogs/science'>Наука</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                        <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Pagination
                countElemPage={countElemPage}
                totalPosts={data.length}
                paginate={paginate}
            />
                    </Col>
                </Row>
            </Container>
        );
    }

export default Blog;