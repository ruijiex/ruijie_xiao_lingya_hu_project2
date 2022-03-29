import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../css/NavigationBar.css';
import { LinkContainer } from 'react-router-bootstrap';
export default function NavigationBar() {
  const stateDifficulty = useSelector((state) => state.changeDifficulty);

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Wordle</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <LinkContainer to='/'>
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={'/game/' + stateDifficulty}>
            <Nav.Link>Game</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/rules'>
            <Nav.Link>Rules</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
