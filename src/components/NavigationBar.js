import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../css/NavigationBar.css';

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Wordle</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Game" id="basic-nav-dropdown">
              <NavDropdown.Item href="/game/easy">Easy</NavDropdown.Item>
              <NavDropdown.Item href="/game/medium">Medium</NavDropdown.Item>
              <NavDropdown.Item href="/game/hard">Hard</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/rules">Rules</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
