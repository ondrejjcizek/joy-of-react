import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'

import Guess from '../Guess'

function GuessResults({ guesses, answer }) {
  return (
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          // console.log(guesses[1].value)
          return (
            <Guess key={num} value={guesses[num]?.value} answer={answer} />
          )
        })}
      </div>
  );
}

export default GuessResults;
