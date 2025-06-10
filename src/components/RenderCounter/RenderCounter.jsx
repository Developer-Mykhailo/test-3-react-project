// import React from 'react'

import { useEffect, useRef, useState } from "react";

const RenderCounter = () => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef("");

  const changeCountRef = useRef(0);

  //handler
  const handleClick = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;

    setInputValue(value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    changeCountRef.current += 1;
  }, [inputValue]);

  //JSX
  return (
    <div>
      <h2>RenderCounter</h2>

      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Submit</button>
      <p>Current value: {inputValue}</p>
      <p>Number of changes: {changeCountRef.current}</p>
    </div>
  );
};

export default RenderCounter;
