import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import changeDifficultyAction from '../actions/changeDifficultyAction';
import NavigationBar from './NavigationBar';
import Wordle from '../game/wordle';
import WordCard from './WordCard';
import { Alert } from 'react-bootstrap';

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
  const level = difficultyMap.has(difficulty)
    ? difficultyMap.get(difficulty)
    : 5;

  const [wordle, setWordle] = useState(new Wordle(level));
  const [inputWord, setInputWord] = useState('');
  const [guessedWords, setGuessedWords] = useState([]);
  const [showInvalidLengthMsg, setShowInvalidLengthMsg] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  // TODO: Hard code words library, 10 words each difficulty.
  // TODO: add attempts map
  const [attempts, setAttempts] = useState(level);
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
      {/* TODO: 
      reset button
      change secret
      clean guessed words
       */}
    </div>
  );
}
