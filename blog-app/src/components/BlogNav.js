import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
 
const BlogNav = () => {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">
                            JavaScript
                        </Nav.Link>
                        <Nav.Link href="#about">
                            Data Structure
                        </Nav.Link>
                        <Nav.Link href="#services">
                            Algorithm
                        </Nav.Link>
                        <Nav.Link href="#contact">
                            Computer Network
                        </Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="ml-auto"  />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
 
export default BlogNav;
