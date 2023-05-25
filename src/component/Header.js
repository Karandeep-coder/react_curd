import React from "react";
import { Navbar,Container,Nav,Form,FormControl,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar className="navbar" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Tuespot Solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/list">List</Link>
                        <Link className="nav-link" to="/insert">Add</Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;