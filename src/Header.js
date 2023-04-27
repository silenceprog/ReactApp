import React, { useState,useEffect } from "react";
import { Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
  Modal
   } from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Medicine from "./Pages/categories/Medicine";
import News from "./Pages/categories/News";
import Travel from "./Pages/categories/Travel";
import Sport from "./Pages/categories/Sport";
import Science from "./Pages/categories/Science";
import 'bootstrap/dist/css/bootstrap.min.css';
import Developers from "./Pages/Developers";
import NaturalScientists from "./Pages/NaturalScientists";
import Marketers from "./Pages/Marketers";
import PostStart from "./Pages/posts/PostStart";
import PostTemperature from "./Pages/posts/PostTemperature";
import PostTournament from "./Pages/posts/PostTournament";

import avatar from "./img/avatar.png"

export default function Header(){
        const [show, setShow] = React.useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [emailDirty, setEmailDirty] = useState( false)
        const [passwordDirty, setPasswordDirty] = useState( false)
        const [emailError, setEmailError] = useState( 'Email не може бути порожнім')
        const [passwordError, setPasswordError] = useState( 'Пароль не може бути порожнім')
        const [formValid, setFormValid] = useState(false)

        const emailHandler = (e) => {
            setEmail(e.target.value)
            const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (!re.test(String(e.target.value.toLowerCase()))) {
                setEmailError('Некоректний email')
            } else {
                setEmailError('')
            }
        }

        const passwordHandler = (e) => {
            setPassword(e.target.value)
            if (e.target.value.length < 3 || e.target.length > 8) {
                setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів')
                if (!e.target.value) {
                    setPasswordError('Пароль не може бути порожнім')
                }
            } else {
                setPasswordError('')
            }
        }
        
        const blurHandler = (e) => {
            switch (e.target.name) {
                case 'email':
                    setEmailDirty(true)
                    break
                case 'password':
                    setPasswordDirty(true)
                    break
            }
        }
        
        useEffect ( () => {
            if (emailError || passwordError) {
                setFormValid(false)
            } else {
                setFormValid(true)
            }
        },[emailError, passwordError])
        

    return (
          <>
          <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                       <img
                       src={avatar}
                       height="30"
                       width="30"
                       className="d-inline-block align-top"
                       alt = "Logo"
                       /> React Site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav claccName="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        
                        <Form className="d-flex justify-content-md-end">
                            <FormControl
                                type ="text"
                                placeholder="Search"
                                className="me-sm-1"
                            />
                            <Button variant="outline-info">Search</Button>
                            <Button className="ms-2" onClick={handleShow}>Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="fromBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                            <Form.Control onChange={e => emailHandler(e)} name="email" value={email}
                             onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="fromBasicPassword">
                            <Form.Label>Password</Form.Label>
                            {(passwordError && passwordDirty) && <div style={{color:"red"}}>{passwordError}</div>}
                            <Form.Control onChange={e => passwordHandler(e)} name="password" 
                            value={password} onBlur={e => blurHandler(e)} type="password" placeholder="Enter password">
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                        </Form.Group>

                        <Button disabled={!formValid} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

              
              <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/about-team/dev" element={<Developers />}/>
                <Route path="/about-team/nature" element={<NaturalScientists/>}/>
                <Route path="/about-team/marketers" element={<Marketers/>}/>
                <Route path="/blogs/news" element={<News/>}/>
                <Route path="/blogs/medicine" element={<Medicine/>}/>
                <Route path="/blogs/sport" element={<Sport/>}/>
                <Route path="/blogs/travel" element={<Travel/>}/>
                <Route path="/blogs/science" element={<Science/>}/>
                <Route path="/blogs/news/post-start/1" element={<PostStart/>}/>
                <Route path="/blogs/science/post-the-hottest-year/2" element={<PostTemperature/>}/>
                <Route path="/blogs/sport/post-win-tournament/3" element={<PostTournament/>}/>
            </Routes>
          </Router>
           
           </>
    
           
    )
}