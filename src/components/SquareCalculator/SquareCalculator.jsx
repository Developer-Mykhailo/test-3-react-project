import { useMemo, useState } from "react";

const SquareCalculator = () => {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("Action");

  const square = useMemo(() => {
    const num = Number(number);
    return isNaN(num) ? "" : num * num;
  }, [number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = e.target.elements.number.value.trim();
    setNumber(newValue);
    e.target.reset();
  };

  const handleClick = () => {
    text === "Action" ? setText("Temp") : setText("Action");
  };

  // JSX
  return (
    <div>
      <p>{text}</p>
      <button type="button" onClick={handleClick}>
        Change Text
      </button>
      <form onSubmit={handleSubmit}>
        <input type="number" name="number" />
        <button type="submit">Calculate</button>
        <p>result: {square}</p>
      </form>
    </div>
  );
};

export default SquareCalculator;
