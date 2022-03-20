import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import changeDifficultyAction from '../actions/changeDifficultyAction';
import NavigationBar from './NavigationBar';
import Wordle from '../game/wordle';

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setGuessedWords((oldWords) => [...oldWords, inputWord]);
    setInputWord('');
  };

  // TODO
  return (
    <div>
      <NavigationBar />
      <h1>Game</h1>
      <p>current state difficulty: {stateDifficulty}</p>
      <p>Current secret: {wordle.getSecret()}</p>
      <form onSubmit={handleSubmit}>
        {/* TODO 
        Set number of input from difficulty
        */}
        <input
          size={level}
          minLength={level}
          maxLength={level}
          type='text'
          required
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
        ></input>
        <button type='submit'>Click to submit</button>
      </form>
      <ul>
        {guessedWords.map((value, index) => {
          // TODO
          // return letter state
          return (
            <li key={index}>
              {value} {wordle.guess(value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
