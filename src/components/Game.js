import React from 'react';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import changeDifficultyAction from '../actions/changeDifficultyAction';
import NavigationBar from './NavigationBar';
import Wordle from '../game/wordle';
import WordCard from './WordCard';

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

  const handleReset = e => {
    e.preventDefault();
    wordle.generateSecret();
    setAttempts(allowance);
    setShowSuccessMsg(false);
    setGuessedWords([]);
    setInputWord('');
  };

  return (
    <div>
      <NavigationBar />
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
          <p>
            The length of the word you input is too short or too long. Input
            again!
          </p>
        </Alert>
      )}
      <h1>Game</h1>
      <p>current state difficulty: {stateDifficulty}</p>
      <p>Current secret: {wordle.getSecret()}</p>
      {attempts === 0 ? (
        <h2>Game over</h2>
      ) : (
        !showSuccessMsg && (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              required
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
            ></input>
            <button type='submit'>Click to submit</button>
          </form>
        )
      )}

      <p>Attempts:{attempts}</p>
      <ul>
        {guessedWords.map((value, index) => {
          return (
            <WordCard guessedWord={value} guessState={wordle.guess(value)} />
          );
        })}
      </ul>
      <button
      name="reset"
      onClick={handleReset}
    >
      Reset
    </button>
    </div>
  );
}
