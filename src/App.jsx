import { useState } from "react";
import { countriesByContinent } from "./data/countries";
import GameBoard from "./components/GameBoard";
import "./styles/styles.css";

const App = () => {
  const [continent, setContinent] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleContinentChange = (event) => {
    const selected = event.target.value;
    setContinent(selected);
    setSelectedCountries(countriesByContinent[selected] || []);
  };

  return (
    <div className="container">
      <h1>Geo Wordle</h1>
      <label>Select a Continent:</label>
      <select value={continent} onChange={handleContinentChange}>
        <option value="">-- Select --</option>
        {Object.keys(countriesByContinent).map((cont) => (
          <option key={cont} value={cont}>
            {cont}
          </option>
        ))}
      </select>
      {continent && <GameBoard countries={selectedCountries} />}
    </div>
  );
};
export default App;