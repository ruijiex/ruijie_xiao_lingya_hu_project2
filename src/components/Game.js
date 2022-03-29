import React from 'react';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import changeDifficultyAction from '../actions/changeDifficultyAction';
import Wordle from '../game/wordle';
import WordCard from './WordCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/Game.css';

export default function Game() {
  const dispatch = useDispatch();
  const { difficulty } = useParams();
  const stateDifficulty = useSelector((state) => state.changeDifficulty);
  if (stateDifficulty !== difficulty) {
    dispatch(changeDifficultyAction(difficulty));
  }

  const difficultyMap = new Map([
    ['easy', 5],
    ['medium', 6],
    ['hard', 7],
  ]);
  const level = difficultyMap.has(difficulty.toLowerCase())
    ? difficultyMap.get(difficulty.toLowerCase())
    : 5;

  const attemptsMap = new Map([
    ['easy', 7],
    ['medium', 6],
    ['hard', 5],
  ]);
  const allowance = attemptsMap.has(difficulty.toLowerCase())
    ? attemptsMap.get(difficulty.toLowerCase())
    : 7;

  const [wordle] = useState(new Wordle(level));
  const [inputWord, setInputWord] = useState('');
  const [guessedWords, setGuessedWords] = useState([]);
  const [attempts, setAttempts] = useState(allowance);

  const [showInvalidLengthMsg, setShowInvalidLengthMsg] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputWord.length !== level) {
      setShowInvalidLengthMsg(true);
    } else if (attempts > 0) {
      setGuessedWords((oldWords) => [...oldWords, inputWord]);
      setAttempts(attempts - 1);
    }
    if (inputWord.toUpperCase() === wordle.getSecret()) {
      setShowSuccessMsg(true);
    }
    setInputWord('');
  };

  const handleReset = (e) => {
    e.preventDefault();
    wordle.generateSecret();
    setAttempts(allowance);
    setShowSuccessMsg(false);
    setGuessedWords([]);
    setInputWord('');
  };

  return (
    <div className='game-body'>
      {showSuccessMsg && (
        <Alert variant='success'>
          <Alert.Heading>Congratulations!</Alert.Heading>
          <p>You have guessed the correct word - {wordle.getSecret()}!</p>
        </Alert>
      )}
      {showInvalidLengthMsg && (
        <Alert
          variant='danger'
          dismissible
          onClose={() => setShowInvalidLengthMsg(false)}
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>The length of the word you input is too short or too long. Input again!</p>
        </Alert>
      )}
      <h1>Game</h1>
      <p>
        Current State Difficulty: {' '}
        {stateDifficulty.charAt(0).toUpperCase() + stateDifficulty.slice(1)}
      </p>
      <p>Secret Word Length: {level}</p>
      <h5>Attempts Allowance: {attempts}</h5>
      <div className='game-content'>
        {attempts === 0 ? (
          <h2>Game over</h2>
        ) : (
          !showSuccessMsg && (
            <Form onSubmit={handleSubmit}>
              <Form.Group role='form'>
                <InputGroup className='mb-3'>
                  <Form.Control
                    required
                    type='text'
                    className='form-control'
                    value={inputWord}
                    onChange={(e) => setInputWord(e.target.value)}
                  />
                  <Button type='submit' variant='outline-dark'>
                    Send
                  </Button>
                </InputGroup>
              </Form.Group>
            </Form>
          )
        )}
      </div>
      <ul className='guessed-words'>
        {guessedWords.map((value, index) => {
          return (
            <WordCard
              key={index}
              guessedWord={value}
              guessState={wordle.guess(value)}
            />
          );
        })}
      </ul>
      <Button name='reset' onClick={handleReset} variant='outline-dark'>
        Reset
      </Button>
    </div>
  );
}
