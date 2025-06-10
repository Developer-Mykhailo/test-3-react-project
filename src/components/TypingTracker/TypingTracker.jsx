// import React from 'react'

import { useEffect, useRef, useState } from "react";

const TypingTracker = () => {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef("");
  const prevInputRef = useRef("");

  //hendler
  const handleClick = () => {
    setInputValue(inputRef.current.value.trim());
    inputRef.current.value = "";
  };

  useEffect(() => {
    prevInputRef.current = inputValue;
  }, [inputValue]);

  //JSX
  return (
    <div>
      <h2>TypingTracker</h2>

      <input ref={inputRef} type="text" name="text" />
      <button onClick={handleClick}>Submit</button>
      <p>Current: {inputValue}</p>
      <p>Previous: {prevInputRef.current}</p>
    </div>
  );
};

export default TypingTracker;
