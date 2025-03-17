import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const date = "days from now will be";
  const [step, setStep] = useState(1);
  const [counter, setCounter] = useState(0);
  const getFutureDate = function (days) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    return currentDate.toDateString();
  };
  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
        Step:{step}
        <button
          onClick={() => {
            if (step > 0) {
              setStep((s) => s - 1);
            }
          }}
        >
          -
        </button>
      </div>
      <div>
        <button onClick={() => setCounter((c) => c + step)}>+</button>
        Counter:{counter}
        <button
          onClick={() => {
            if (counter > 0) {
              setCounter((c) => step - c);
            }
          }}
        >
          -
        </button>
      </div>
      <p>{`${counter} ${date} ${getFutureDate(counter)}`}</p>
    </>
  );
}
