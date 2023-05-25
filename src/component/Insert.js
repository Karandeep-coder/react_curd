import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Insert() {
    
    // hook
    useEffect(()=>{
        document.title = "Inset Data";
    },[]);

    // insert data
    const [inset, setData]=useState({});

    //function
    const handleForm=(e)=>{
        console.log(inset);
        insetData(inset);
        e.preventDefault();
        e.target.reset();
    }

    // function call to server
    const insetData = (data) =>{
        axios.post('http://localhost:8080/student/',data).then(
            (respone)=>{
                console.log(respone);
                toast.success('successful');
            },
            (error)=>{
                console.log(error);
            }
        )
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col className="inset-col">
                        <div className="text-center">
                            <Form onSubmit={handleForm}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Student Name</Form.Label>
                                    <Form.Control  type="text" placeholder="Enter student name" 
                                        onChange={(e)=>{
                                            setData({...inset,studentName:e.target.value})
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Roll No</Form.Label>
                                    <Form.Control type="number" placeholder="Roll no." 
                                        onChange={(e)=>{
                                            setData({...inset,rollNo:e.target.value})
                                        }}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Insert;