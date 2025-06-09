// import React from "react";

import { useEffect, useRef, useState } from "react";

const RefComponent = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef("");

  const prevValueRef = useRef("");

  // handlers
  const handleClick = () => {
    setValue(inputRef.current.value);
  };

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  //JSX
  return (
    <div>
      <h2>RefComponent</h2>

      <input ref={inputRef} type="text" name="text" />

      <button type="button" onClick={handleClick}>
        Save input value
      </button>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValueRef.current}</p>
    </div>
  );
};

export default RefComponent;
