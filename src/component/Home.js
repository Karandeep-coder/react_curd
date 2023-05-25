import React from "react";
import { Col, Row } from "react-bootstrap";

function Home(){
    return(
        <div>
            <Row>
                <Col className="home-col">
                    <div className="text-center">
                        <h1>Home Page</h1>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
