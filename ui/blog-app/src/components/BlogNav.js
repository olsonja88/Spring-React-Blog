import React from "react";
import { useState } from "react";
import { Container, Navbar, Nav, Button, Offcanvas, Form } from 'react-bootstrap';
 
const BlogNav = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div role="navigation">
            <Navbar>            
                <Container className="fluid">
                    <Navbar.Brand className="text-dark">The Web Log</Navbar.Brand>
                    <Button onClick={handleShow}>
                        Navigate
                    </Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton className="text-dark">
                            <Offcanvas.Title>The Web Log</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="text-light">
                            <Nav.Link href="#home" className="p-3">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#posts" className="p-3">
                                Categories
                            </Nav.Link>
                            <Form className="p-3">
                                <Form.Control type="search" placeholder="Search" aria-label="Search" className="mb-3"></Form.Control>
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
