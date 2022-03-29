import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/Home.css';
import { useDispatch } from 'react-redux';
import changeDifficultyAction from '../actions/changeDifficultyAction';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div className='home-content'>
      <p className='title'>Wordle!</p>
      <p>Choose Difficulty and Start Game</p>
      <div className='buttons'>
        <Button
          variant='outline-dark'
          href={`game/easy`}
          onClick={() => {
            dispatch(changeDifficultyAction('easy'));
          }}
        >
          Easy
        </Button>
        <Button
          variant='outline-dark'
          href={`game/medium`}
          onClick={() => {
            dispatch(changeDifficultyAction('medium'));
          }}
        >
          Medium
        </Button>
        <Button
          variant='outline-dark'
          href={`game/hard`}
          onClick={() => {
            dispatch(changeDifficultyAction('hard'));
          }}
        >
          Hard
        </Button>
      </div>
    </div>
  );
}
