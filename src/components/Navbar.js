import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

const navbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Button>Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
