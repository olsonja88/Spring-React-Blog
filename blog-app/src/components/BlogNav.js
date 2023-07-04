import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Container, Navbar, Nav, Button, Offcanvas, Form, FormControl } from 'react-bootstrap';
 
const BlogNav = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div role="navigation">
            <Navbar className="bg-primary">            
                <Container className="fluid">
                    <Navbar.Brand>The Web Log</Navbar.Brand>
                    <Button variant="primary" onClick={handleShow}>
                        Navigate
                    </Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>The Web Log</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav.Link href="#home">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#posts">
                                Dev Posts
                            </Nav.Link>
                            <Form>
                                <Form.Control type="search" placeholder="Search" aria-label="Search"></Form.Control>
                                <Button type="submit">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
 
export default BlogNav;
