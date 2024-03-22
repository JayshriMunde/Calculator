import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      if (input.trim() === "") {
        setResult("Error");
      } else {
        try {
          let res = eval(input);
          if (isNaN(res)) {
            setResult("NaN");
          } else if (!isFinite(res)) {
            setResult("Infinity");
          } else {
            setResult(res.toString());
          }
        } catch (error) {
          setResult("Error");
        }
      }
    } else if (value === "C") {
      setResult("");
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" className="input" value={input} readOnly />
      <div className="result">{result}</div>

      <div className="keypad">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
