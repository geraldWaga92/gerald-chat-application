import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
function Navigation() {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} style={{ width: 50, height: 50 }} />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/chat">
                            <Nav.Link>Chat</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title={<></>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                            <NavDropdown.Item>
                                <Button variant="danger">Logout</Button>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
