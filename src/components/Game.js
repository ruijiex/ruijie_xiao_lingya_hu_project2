import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function Game() {
  const { difficulty } = useParams();

  return (
    <div>
      <NavigationBar />
      <h1>Game</h1>
      <h1>{difficulty}</h1>
    </div>
  );
}
