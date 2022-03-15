import React from 'react';
import NavigationBar from './NavigationBar';
import Button from 'react-bootstrap/Button';
import '../css/Home.css';
export default function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className='home-content'>
        <p className='title'>Wordle!</p>
        <p>Choose difficulty and start game</p>
        <div className='buttons'>
          <Button variant='outline-dark' href={`game/easy`}>
            Easy
          </Button>
          <Button variant='outline-dark' href={`game/medium`}>
            Medium
          </Button>
          <Button variant='outline-dark' href={`game/hard`}>
            Hard
          </Button>
        </div>
      </div>
    </div>
  );
}
