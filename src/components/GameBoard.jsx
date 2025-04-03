import { useState } from "react";
import InputBox from "./InputBox";

const GameBoard = ({ countries }) => {
  if (!countries.length) return <p>Please select a continent to start.</p>;

  const [targetCountry, setTargetCountry] = useState(
    countries[Math.floor(Math.random() * countries.length)]
  );

  return (
    <div>
      <h2>Guess the Country:</h2>
      <InputBox targetCountry={targetCountry.toUpperCase()} />
    </div>
  );
};

export default GameBoard;
