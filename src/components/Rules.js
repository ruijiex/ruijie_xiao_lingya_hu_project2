import React from 'react';
import '../css/Rules.css';

export default function Rules() {
  return (
    <div className='rules-body'>
      <h1 className='rules-title'>Rules</h1>

      <h3 className='rules-difficulty'>Difficulty</h3>
      <p className='rules-difficulty'>
        Wordle has three difficulty levels: Easy, Medium, Hard
      </p>
      <ul className='rules-difficulty'>
        <li>
          Easy Game: Every game is a 5 character length session, player has 7
          attempts
        </li>
        <li>
          Medium Game: Every game is a 6 character length session, player has 6
          attempts
        </li>
        <li>
          Hard Game: Every game is a 7 character length session, player has 5
          attempts
        </li>
      </ul>

      <h3 className='rules-clues'>Game Clues</h3>
      <p className='rules-clues'>
        Game clues will be provided on every attempt if not winning
      </p>
      <ul className='rules-clues'>
        <li>
          Character Green Background: both the character and the position of the
          character is correct
        </li>
        <li>
          Character Yellow Background: the character exists in the secret word
          but the position of the character is incorrect
        </li>
        <li>
          Character Grey Background: neither the character exists in the secret
          word nor the position of the character is correct
        </li>
      </ul>
      <p className='rules-clues'>
        Additionally: Yellow clue can also indicate the frequency of a character
        appears in the secret word
      </p>
      <p className='rules-clues'>
        If you enter more characters in an attempt than the frequency of the
        character in the secret word, those additional characters you enter will
        be colored as grey
      </p>
    </div>
  );
}
