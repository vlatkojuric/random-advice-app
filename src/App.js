import { useState } from "react";
import "./App.css";
import axios from "axios";
import Icon from "./assets/Icon";

function App() {
  const [randomAdvice, setRandomAdvice] = useState(
    'Press the "Get advice" button to hear some wisdom 🔮 '
  );
  function fetchAdviceData() {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setRandomAdvice(response.data.slip.advice);
    });
  }

  return (
    <div className="App">
      <h1>{randomAdvice}</h1>
      <div onClick={fetchAdviceData}>
        <Icon />
      </div>
    </div>
  );
}

export default App;
