import { useState } from "react";

const InputBox = ({ targetCountry }) => {
  const [guess, setGuess] = useState(""); // Stores user input
  const [attempts, setAttempts] = useState(5); // Remaining attempts
  const [message, setMessage] = useState(""); // Feedback message
  const [displayWord, setDisplayWord] = useState("_ ".repeat(targetCountry.length)); // Hidden country name

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
        newDisplay += `<span class="correct">${guess[i]}</span> `;
        correct++;
      } else {
        newDisplay += `<span class="wrong">${guess[i]}</span> `;
      }
    }

    setDisplayWord(newDisplay);

    if (correct === targetCountry.length) {
      setMessage("🎉 You guessed it right!");
    } else {
      setAttempts(attempts - 1);
      setMessage(attempts > 1 ? `Attempts left: ${attempts - 1}` : "❌ Game Over!");
    }
  };

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{ __html: displayWord }}></h3>
      {attempts > 0 && (
        <>
          <input type="text" value={guess} onChange={handleInputChange} />
          <button onClick={checkGuess}>Submit</button>
        </>
      )}
      <p>{message}</p>
    </div>
  );
};

export default InputBox;
