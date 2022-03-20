import React from 'react';

export default function WordCard(props) {
  return (
    <li>
      {props.guessedWord} {props.guessState}
    </li>
  );
}
