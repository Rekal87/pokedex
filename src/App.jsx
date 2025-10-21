import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./features/Card";
// import { getFormattedFileName } from "./utils/getFormattedFileName";
import pokemon from "./utils/pokedex.json";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);
  const handleRandomClick = () => {
    const randomNumber = Math.floor(Math.random() * 151) + 1;
    setRandomNumber(randomNumber);
  };

  return (
    <>
      <h1>Hello World</h1>
      <p>Lorem Ipsum...</p>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Input />
        <Button text="Search" />
        <Button text="Random" onClick={handleRandomClick} />
      </div>
      <div>
        <Card pokemon={pokemon[randomNumber]} />
      </div>
    </>
  );
}

export default App;
