import { useState } from "react";
import "./App.css";
import axios from "axios";
import Icon from "./assets/Icon";

function App() {
  const [randomAdvice, setRandomAdvice] = useState(
    'Press the "Dice" button to hear some wisdom 🔮 '
  );
  const [randomAdviceId, setRandomAdviceId] = useState("");

  function fetchAdviceData() {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setRandomAdvice(response.data.slip.advice);
      setRandomAdviceId(response.data.slip.id);
    });
  }

  return (
    <div className="App">
      <p>Advice #{randomAdviceId}</p>
      <h1>{randomAdvice}</h1>
      <button onClick={fetchAdviceData}>
        <Icon />
      </button>
    </div>
  );
}

export default App;
