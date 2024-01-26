import { useState } from "react";
import "./App.css";
import axios from "axios";
import Icon from "./assets/Icon";

function App() {
  const [randomAdvice, setRandomAdvice] = useState(false);

  const [randomAdviceId, setRandomAdviceId] = useState("");

  function fetchAdviceData() {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setRandomAdvice(response.data.slip.advice);
      setRandomAdviceId(response.data.slip.id);
    });
  }

  return (
    <div className="container-center">
      <div className="container">
        {!randomAdvice && (
          <p className="dissapear-text">
            Press the "Dice" button to hear some wisdom 🔮
          </p>
        )}
        {randomAdvice && <p className="advice-id">Advice #{randomAdviceId}</p>}
        {randomAdvice && <h1 className="random-advice">"{randomAdvice}"</h1>}

        <div className="flex-span">
          <span className="line"></span>
          <span className="vertical-lines"> || </span>
          <span className="line"></span>
        </div>

        <button onClick={fetchAdviceData} className="dice-button">
          <Icon />
        </button>
      </div>
    </div>
  );
}

export default App;
