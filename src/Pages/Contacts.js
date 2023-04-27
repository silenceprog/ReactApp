import React, { useState,useEffect } from "react";
import {
    Container,
    Form,
    Button,
     } from "react-bootstrap";

function Contacts() {
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState( false)
    const [emailError, setEmailError] = useState( 'Email не може бути порожнім')
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

    const blurHandler = (e) => {
        if(e.target.name == 'email')
            setEmailDirty(true)
    }

    useEffect ( () => {
        if (emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },[emailError])

        return (
            <Container>

                <h2 className="text-center m-4">Contact us</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
                        <Form.Control onChange={e => emailHandler(e)} name="email" value={email} 
                        onBlur={e => blurHandler(e)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group controlId="fromBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me"/>
                    </Form.Group>

                    <Button  variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </Container>
        );
    }

export default Contacts;
