import React from 'react';
import '../css/WordCard.css';

export default function WordCard(props) {
  const chars = [];
  for (const char of props.guessedWord)
    chars.push(char);

  return (
    <li className="guess-attempt">
      {chars.map((char, index) => {
        return (
          <span class={"color-hint-" + props.guessState[index].toString()}>{char}</span>
        );
      })}

    </li>
  );
}
