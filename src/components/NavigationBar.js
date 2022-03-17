import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../css/NavigationBar.css';

export default function NavigationBar() {
  const { difficulty } = useParams();
  // if (difficulty === undefined)
  //   difficulty = 'easy';

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Wordle</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href={'/game/' + difficulty}>Game</Nav.Link>
            <Nav.Link href='/rules'>Rules</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
