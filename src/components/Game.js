import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { useDispatch, useSelector } from 'react-redux';
import changeDifficultyAction from '../actions/changeDifficultyAction';
import { useState } from 'react';

export default function Game() {
  const dispatch = useDispatch();
  const { difficulty } = useParams();
  const stateDifficulty = useSelector((state) => state.changeDifficulty);
  if (stateDifficulty !== difficulty) {
    dispatch(changeDifficultyAction(difficulty));
  }
  const [inputWord, setInputWord] = useState('');
  const [guessedWords, setGuessedWords] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setGuessedWords((oldWords) => [...oldWords, inputWord]);
    setInputWord('');
  };

  // TODO
  const secret = '';
  return (
    <div>
      <NavigationBar />
      <h1>Game</h1>
      <p>current state difficulty: {stateDifficulty}</p>
      <p>Current secret: {secret}</p>
      <form onSubmit={handleSubmit}>
        {/* TODO 
        Set number of input from difficulty
        */}
        <input
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
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}
