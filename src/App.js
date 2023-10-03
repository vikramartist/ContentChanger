import "./styles.css";
import { useState } from "react";

const text = [
  "Welcome to the home page",
  "Register if you are a new user",
  "Congratulations to you, welcome to my home page"
];

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <button className="btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "X" : "O"}
      </button>
      {isOpen && <Steps text={text} />}
    </div>
  );
}

function Steps({ text }) {
  const [steps, setSteps] = useState(1);

  const handlePrevious = () => {
    steps > 1 && setSteps((s) => s - 1);
  };

  const handleNext = () => {
    steps < 3 && setSteps((s) => s + 1);
  };

  const style = {
    backgroundColor: "rgb(148, 7, 199)",
    color: "whitesmoke",
    borderRadius: "2rem",
    borderStyle: "hidden",
    padding: "0.3rem 0.5rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={steps >= 1 ? "active" : ""}>1</div>
        <div className={steps >= 2 ? "active" : ""}>2</div>
        <div className={steps >= 3 ? "active" : ""}>3</div>
      </div>

      <StepMessage step={steps}>{text[steps - 1]}</StepMessage>

      <div className="buttons">
        <Button onClick={handlePrevious} style={style}>
          Previous <span>👈</span>
        </Button>
        <Button onClick={handleNext} style={style}>
          Next <span>👉</span>
        </Button>
      </div>
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="text">
      <h5>Step {step}: </h5> {children}
    </div>
  );
}

function Button({ onClick, style, children }) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}
