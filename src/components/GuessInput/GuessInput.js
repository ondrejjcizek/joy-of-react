import React from 'react';

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()

    handleSubmitGuess(tentativeGuess)

    setTentativeGuess('')
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input required disabled={gameStatus !== 'running'} minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" title="5 letter word" id="guess-input" value={tentativeGuess} onChange={(event) => {
        const nextGuess = event.target.value.toUpperCase()
        setTentativeGuess(nextGuess)
      }} type="text" />
      
    </form>
  );
}

export default GuessInput;
