import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { useDispatch, useSelector } from 'react-redux';
import changeDifficultyAction from '../actions/changeDifficultyAction';

export default function Game() {
  const dispatch = useDispatch();
  const { difficulty } = useParams();
  const stateDifficulty = useSelector((state) => state.changeDifficulty);
  if (stateDifficulty !== difficulty) {
    dispatch(changeDifficultyAction(difficulty));
  }

  return (
    <div>
      <NavigationBar />
      <h1>Game</h1>
      <h1>{difficulty}</h1>
      <p>current state difficulty: {stateDifficulty}</p>
    </div>
  );
}
