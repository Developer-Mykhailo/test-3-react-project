// import React from "react";

import { useMemo, useState } from "react";

const FactorialCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("Text");

  const factorial = useMemo(() => {
    let num = Number(inputValue);

    if (isNaN(num) || num < 0) return "Invalid input";
    if (num === 0) return 1;

    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [inputValue]);

  // hendler
  const hendleSubmit = (e) => {
    e.preventDefault();
    const newValue = e.target.elements.number.value;
    setInputValue(newValue);
    e.target.reset();
  };

  //JSX
  return (
    <div>
      <h2>FactorialCalculator</h2>
      <p>{text}</p>
      <button
        onClick={() => (text === "Text" ? setText("Action") : setText("Text"))}
      >
        Change text
      </button>

      <form onSubmit={hendleSubmit}>
        <input type="text" name="number" />
        <button type="submit">Calculate</button>
      </form>

      <p>result: {factorial}</p>
    </div>
  );
};

export default FactorialCalculator;
