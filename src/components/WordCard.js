import React from 'react';
import '../css/WordCard.css';

export default function WordCard(props) {
  return (
    <li class="guess-attempt">
      {props.guessedWord} {props.guessState}
    </li>
  );
}
