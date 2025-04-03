import { useState } from "react";

const InputBox = ({ targetCountry }) => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(5);
  const [message, setMessage] = useState("");
  const [displayWord, setDisplayWord] = useState("_ ".repeat(targetCountry.length));
  const [gameOver, setGameOver] = useState(false);

  const handleInputChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  const checkGuess = () => {
    if (guess.length !== targetCountry.length) {
      setMessage("Incorrect length! Try again.");
      return;
    }

    let newDisplay = "";
    let correct = 0;

    for (let i = 0; i < targetCountry.length; i++) {
      if (guess[i] === targetCountry[i]) {
        newDisplay += `<span class='correct'>${guess[i]}</span> `;
        correct++;
      } else {
        newDisplay += `<span class='wrong'>${guess[i]}</span> `;
      }
    }

    setDisplayWord(newDisplay);

    if (correct === targetCountry.length) {
      setMessage("🎉 Congrats! You guessed it right!");
      setGameOver(true);
    } else {
      setAttempts(attempts - 1);
      if (attempts - 1 === 0) {
        setMessage(`❌ Game Over! The country was: ${targetCountry}`);
        setGameOver(true);
      } else {
        setMessage(`Attempts left: ${attempts - 1}`);
      }
    }
  };

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: displayWord }}></h3>
      {!gameOver && (
        <>
          <input type="text" placeholder="Type here" value={guess} onChange={handleInputChange} />
          <button onClick={checkGuess}>Submit</button>
        </>
      )}
      <p>{message}</p>
    </div>
  );
};

export default InputBox;