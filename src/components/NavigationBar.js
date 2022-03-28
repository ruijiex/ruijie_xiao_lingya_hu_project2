import React from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import '../css/NavigationBar.css';

export default function NavigationBar() {
  const stateDifficulty = useSelector((state) => state.changeDifficulty);
  const [active, setActive] = useState('home');

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Wordle</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav
            variant='tabs'
            className='me-auto'
            activeKey={active}
            onSelect={(chosen) => setActive(chosen)}
          >
            <Nav.Item>
              <Nav.Link
                eventKey='home'
                href='/'
                onSelect={(chosen) => setActive(chosen)}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey='game'
                href={'/game/' + stateDifficulty}
                onSelect={(chosen) => setActive(chosen)}
              >
                Game
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey='rules'
                href='/rules'
                onSelect={(chosen) => setActive(chosen)}
              >
                Rules
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
